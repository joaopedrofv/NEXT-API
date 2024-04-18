import { Client } from "./interfaces";

const clients: Client[] = [
    {
        name: "João Paulo",
        address: "Rua do João Paulo"
    },
    {
        name: "Maria da Silva",
        address: "Rua da Maria da Silva"
    },
    {
        name: "Pedro Albuquerque",
        address: "Rua do Pedro Albuquerque"
    }
];

export function GET() {
    return Response.json(clients);
}

export async function POST(request: Request) {
    const form = await request.formData();
    const name = form.get("name") as string;
    const address = form.get("address") as string;

    clients.push({
        name,
        address
    })

    return Response.json({ status: "Added" })
};
