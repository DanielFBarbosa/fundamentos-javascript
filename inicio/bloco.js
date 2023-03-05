//Para abrir os blocos de codigos, deve-se inserir chaves de abertura e fechamento >>{}.
//Também, pode-se abrir blocos de codigos dentro de outro bloco de código .

{
    console.log("Passo #1");
    console.log("Passo #2");
    console.log("Paso #3");
}

{
    console.log("Passo #4");
    console.log("Passo #5");
}
// Abertura de bloco de codigo ,chaves dentro de chaves.
{
    {
        {
            {
                console.log("Abertura de bloco dentro de outro bloco, com chave dentro de chave");
                console.log("passo #6");
                console.log("Passo #7");            
            }
        }
    }
}

{
    console.log("fim !!!");
}