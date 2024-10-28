export const GET = async (req: any) => {
    return new Response(
        JSON.stringify({ msg: "I'm a property page" }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )
}