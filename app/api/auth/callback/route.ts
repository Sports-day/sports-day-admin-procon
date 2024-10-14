import {NextRequest} from "next/server"

export async function POST(request: NextRequest) {
    //  pass code to the backend
    const backendURL = process.env.NEXT_PUBLIC_API_INTERNAL_URL ? process.env.NEXT_PUBLIC_API_INTERNAL_URL : process.env.NEXT_PUBLIC_API_URL
    const loginEndpoint = backendURL + '/login'

    //  post code to the backend using fetch
    const response = await fetch(loginEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        })
    })

    //  get cookie from response
    const cookie = response.headers.get('set-cookie')
    const subDirectory = process.env.SUB_DIRECTORY ? process.env.SUB_DIRECTORY : "/"
    if (cookie) {
        // redirect to root page
        return new Response(null, {
            status: 301,
            headers: {
                "Location": subDirectory,
                "Set-Cookie": cookie,
            },
        })
    }

    //  redirect to root page
    return new Response(null, {
        status: 301,
        headers: {
            "Location": subDirectory,
        },
    })
}
