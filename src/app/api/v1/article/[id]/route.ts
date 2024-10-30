export async function GET(request: Request, { params }: { params: { id: string } }) {
    const url = process.env.MICROCMS_SERVICE_DOMAIN + process.env.MICROSMS_BASE_PATH + "blogs/" + params.id
   
    const headers = {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
        };

    const data = await fetch(url, {
        headers: headers
    }).then(response => response.json());

    return Response.json(data);
}