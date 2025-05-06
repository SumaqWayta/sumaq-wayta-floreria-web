import { FLOWER_REQUEST } from "@/types/flower";
import axios from "axios";
import { NextResponse } from "next/server";

const API_EXTERNAL_URL = process.env.EXTERNAL_API;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const flowers = body.flowers.map((flower: FLOWER_REQUEST) => {
      return `
      Nombre: ${flower.id}
      Url: ${process.env.NEXT_PUBLIC_BASE_URL}${flower.url}
      Cantidad: ${flower.cantidad}
      Precio: ${flower.precio}`;
    });

    const form = {
      subject: "Pedido de Flores",
      email: body.email,
      project: "sumaqwayta",
      token: body.token,
      description: `
      Nombre: ${body.name}
      Correo: ${body.email}
      Celular: ${body.phone}

      Ciudad: ${body.city}
      Dirección: ${body.address}
      Referencia: ${body.reference}

      Método de pago: ${body.paymentMethod}
      
      Información adicional: ${body.additionalInformation}

      Flores:
      ${flowers.join("\n")}

      Total a pagar: S/ ${body.total}
      `,
    };

    await axios.post(`${API_EXTERNAL_URL}/email/send`, form);

    return new Response(
      JSON.stringify({ message: "success", status: 200, success: true }),
      {
        status: 200,
      }
    );
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return NextResponse.json(
        {
          message: "error",
          status: err.response?.data?.status || 500,
          success: false,
        },
        { status: err.response?.status || 500 }
      );
    }

    return NextResponse.json(
      { message: "Unexpected error", success: false },
      { status: 500 }
    );
  }
}
