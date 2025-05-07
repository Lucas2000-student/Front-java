"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Usuario {
    userId: number;
    username: string;
}

export default function ListaPessoa() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/usuario")
            .then((res) => {
                setUsuarios(res.data);  // Aqui, res.data já é a lista de usuários
            })
            .catch((err) => {
                console.error("Erro ao carregar os usuários", err);
                setErro("Erro ao carregar os usuários.");
            });
    }, []);

    return (
        <>
            <h1>👤 Lista de Pessoas:</h1>
            {erro && <p className="text-red-500">{erro}</p>}
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.userId}>
                        {usuario.username} (ID: {usuario.userId})
                    </li>
                ))}
            </ul>
        </>
    );
}
