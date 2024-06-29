import os
from config import Hosting
from aiohttp import web
import generator

# https://docs.aiohttp.org/en/v3.8.5/web_advanced.html#complex-applications
# async def init_client_session(_app):
#     async def init_session():
#         async with aiohttp.ClientSession() as session:
#             server.apis.pool.set_session(session)
#             await asyncio.Future()  # Run forever
#
#     task = asyncio.create_task(init_session())
#
#     yield
#
#     task.cancel()
#     with contextlib.suppress(asyncio.CancelledError):
#         await task


async def list_parts(request):
    parts = {
        "eyes": len([f for f in os.listdir("face-parts/eyes") if f.startswith("eye-") and f.endswith("lash1.DST")]),
        "eyelashes": len([f for f in os.listdir("face-parts/eyes") if f.startswith("eye-1-")]),
        "eyebrows": len([f for f in os.listdir("face-parts/eyebrows") if f.startswith("eyebrow-")]),
        "mouths": len([f for f in os.listdir("face-parts/mouths") if f.startswith("mouth-")]),
    }
    return web.json_response(parts)


async def make_face(request):
    try:
        eye_no = int(request.query["eyes"])
        lash_no = int(request.query["eyelashes"])
        brow_no = int(request.query["eyebrows"])
        mouth_no = int(request.query["mouth"])
        heterochromia = "heterochromia" in request.query and request.query["heterochromia"] == "true"
    except KeyError as keyerr:
        return web.Response(status=400, text=f"Missing {keyerr}")
    except ValueError as verr:
        return web.Response(status=400, text=f"Invalid value: {verr}")

    filename = f"generated-e{eye_no}l{lash_no}b{brow_no}m{mouth_no}"
    fname_attrs = "".join([
        "H" if heterochromia else ""
    ])
    if len(fname_attrs) > 0:
        filename += f"-{fname_attrs}"
    filename += ".DST"

    face = generator.combine_parts(
        eye_no,
        lash_no,
        brow_no,
        mouth_no,
        heterochromia=heterochromia
    )  # TODO dont block

    return web.Response(body=face, headers={"Content-Disposition": f"inline; filename=\"{filename}\""})


def main():
    os.chdir(os.path.abspath(os.path.dirname(__file__)))

    app = web.Application()
    app.add_routes([
        web.get("/face/list", list_parts),
        web.get("/face", make_face),
    ])

    print(f"[START] Listening on port {Hosting.port}...")
    web.run_app(app, host=Hosting.host, port=Hosting.port)


if __name__ == '__main__':
    main()