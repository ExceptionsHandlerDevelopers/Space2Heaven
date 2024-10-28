// Route : /api/sign-in

export const GET = async (request : any) => {
    return new Response(
      JSON.stringify({ msg: "I'm Sign-In route" }), 
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  };
  