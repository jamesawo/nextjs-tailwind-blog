import * as process from "process";

export function isProduction(): boolean{
    return process.env.NODE_ENV === 'production';
}

export function getBaseUrl(): string {
    return process.env.SERVER_URL ?? '';
}


export default function revalidateCache(id: string, paths: string[]) {
    return fetch("/api/revalidate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, paths }),
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}
