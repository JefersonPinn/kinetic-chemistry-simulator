var botaoEnviar = document.querySelector("#send");

botaoEnviar.addEventListener("click", function(event){
    calc();
})

function calc() {
    // recupera os valores fornecidos pelo usuário
    let k = parseFloat(document.querySelector("#k").value);
    let A_0 = parseFloat(document.querySelector("#A_0").value);
    let B_0 = parseFloat(document.querySelector("#B_0").value);
    let valorf =  document.querySelector("#valf");
    
  
    if (!A_0) {
        A_0 = B_0 * k;
        valorf.innerHTML = "O valor que falta é o de [A]inicial que é igual a: " + A_0;
        valorf.style.display = "flex";
    }
  
    if (!B_0) {
        B_0 = A_0 * k;
        valorf.innerHTML = "O valor que falta é o de [B]inicial que é igual a: " + B_0;
        valorf.style.display = "flex";

    }

    if (!k) {
        k = A_0 / B_0;
        valorf.innerHTML = "O valor que falta é o de K que é igual a: " + k;
        valorf.style.display = "flex";
    }
  
    // condições iniciais
    let A = [A_0]; 
    let B = [B_0];
    let C = [0];
    let t = [0];
  
    const dt = 0.01; // passo de tempo
  
    for (let i = 0; i < 1000; i++) {
        A.push(A[i] - k * A[i] * B[i] * dt);
        B.push(B[i] - k * A[i] * B[i] * dt);
        C.push(C[i] + k * A[i] * B[i] * dt);
        t.push(t[i] + dt);
    }
  
    // plotar resultados
    const trace1 = {
        x: t,
        y: A,
        name: "A",
        type: "scatter"
    };
  
    const trace2 = {
        x: t,
        y: B,
        name: "B",
        type: "scatter"
    };
  
    const trace3 = {
        x: t,
        y: C,
        name: "C",
        type: "scatter"
    };
  
  const data = [trace1, trace2, trace3];
  
  const layout = {
    xaxis: {
    title: "Tempo (s)"
    },
    yaxis: {
    title: "Concentração (M)"
    }
  };
  Plotly.newPlot("graph", data, layout);
}