import Together from "together-ai";

const together = new Together();

export async function POST(request) {
  try {
    const { message } = await request.json();
    
    const response = await together.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Eres un asistente virtual especializado en maternidad y embarazo. Proporciona respuestas útiles, precisas y empáticas sobre temas relacionados con el embarazo, cuidado prenatal, desarrollo del bebé y bienestar materno. Responde en español. Tienes un limite de 300 tokens así que trata de resumir la respuesta para que se encuentre dentro del limite."
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
      max_tokens: 300
    });

    return Response.json({ 
      reply: response.choices[0].message.content 
    });
  } catch (error) {
    console.error('Error en IA:', error);
    return Response.json({ 
      error: 'Error al procesar solicitud con IA. Verifica tu configuración.' 
    }, { status: 500 });
  }
}