"use client"

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


interface Usuario {
    userId: number
    username: string
}

export default function ListaPessoa() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const router = useRouter()

    async function carregarUsuarios() {
        const res = await axios.get("http://localhost:8080/usuario")
    }
    useEffect(function () {
        carregarUsuarios();
    }, [])
    return (
        <ul>
            {usuarios.map(
                function (usuario) {
                    return (
                        <li></li>
                    )
                }
            )}
        </ul>
    )
}