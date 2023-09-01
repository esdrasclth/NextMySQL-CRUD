import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
    try {
        const result = await conn.query("SELECT * FROM products WHERE id = ?", [params.id]);

        if (result.length === 0) {
            return NextResponse.json({
                message: "Producto no encontrado"
            }, { status: 404 })
        }

        return NextResponse.json(result[0]);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const result = await conn.query("DELETE FROM products WHERE id = ?", [params.id]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ message: "Product no encontrado" }, { status: 404 })
        }

        return new Response(null, { status: 204 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export function PUT() {
    return NextResponse.json({ message: 'actualizando un producto' })
}