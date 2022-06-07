$(function() {
    $("#inserir").click( () => {
        // atribui o value do id="nAlunos" para a variável
        let quantidade = $("#nAlunos").val();

        if (quantidade) {
            quantidade = parseInt(quantidade);
            for (let i=1; i <= quantidade; i++) {

                $("#camposInseridos").append(`<input type="text" name="nome[]" placeholder="Nome ${i}">`);
                $("#camposInseridos").append(`<input type="number" name="prova[]" placeholder="Nota da prova">`);
                $("#camposInseridos").append(`<input type="number" name="trabalho[]" placeholder="Nota do trabalho">`);

                $("#camposInseridos").append(`<br>`);

            }

            $("#camposInseridos").append(`<input type="button" id="calcular" value="Calcular">`);

            document.getElementById("nAlunos").style.visibility = 'hidden';
            document.getElementById("inserir").style.visibility = 'hidden';
            document.getElementById("pInserir").style.visibility = 'hidden';

            $(function() {
                $("#calcular").click( () => {

                    $("#tabela").append(' \
                        <table class="table"> \
                        <thead>\
                            <tr>\
                                <th scope="col">Aluno</th>\
                                <th scope="col">Nota prova</th> \
                                <th scope="col">Nota trabalho</th> \
                                <th scope="col">Média</th> \
                            </tr>\
                        </thead>\
                        <tbody id="corpoTabela"></tbody>\
                    ');

                    var listaNome = document.getElementsByName('nome[]');
                    var listaNotaProva = document.getElementsByName('prova[]');
                    var listaNotaTrabalho = document.getElementsByName('trabalho[]');
                    var somaMedias = 0;
                    var somaNotasProva = 0;
                    var somaNotasTrabalho = 0;
                    var maiorNotaProva = listaNotaProva[0].value;
                    var menorNotaProva = listaNotaProva[0].value;
                    var maiorNotaTrabalho = listaNotaTrabalho[0].value;
                    var menorNotaTrabalho = listaNotaTrabalho[0].value;

                    for (let c=0; c < quantidade; c++) {

                        nome = listaNome[c].value;
                        notaProva = Number(listaNotaProva[c].value);
                        notaTrabalho = Number(listaNotaTrabalho[c].value);
                        let media = (notaProva * 2 + notaTrabalho * 3) / 5;

                        let linha = '<tr>' + '<th scope="row">' + nome + '</th>';
                        linha += '<th scope="row">' + notaProva + '</th>';
                        linha += '<th scope="row">' + notaTrabalho + '</th>';
                        linha += '<th scope="row">' + media + '</th>';
                        linha += '</tr>';
                        $("#corpoTabela").append(linha);

                        somaMedias += media;
                        somaNotasProva += notaProva;
                        somaNotasTrabalho += notaTrabalho

                        if(maiorNotaProva < notaProva){
                            maiorNotaProva = notaProva;
                        }
                        if(menorNotaProva > notaProva){
                            menorNotaProva = notaProva;
                        }
                        if(maiorNotaTrabalho < notaTrabalho){
                            maiorNotaTrabalho = notaTrabalho;
                        }
                        if(menorNotaTrabalho > notaTrabalho){
                            menorNotaTrabalho = notaTrabalho;
                        }
                    }

                    var mediaGeral = somaMedias / listaNome.length;
                    var mediaProvas = somaNotasProva / listaNome.length;
                    var mediaTrabalhos = somaNotasTrabalho / listaNome.length;

                    $("#resultados").append(" \
                    <p>Média geral: " + mediaGeral.toFixed(1) + "</p> \
                    <p>Média das provas: " + mediaProvas.toFixed(1) + "</p> \
                    <p>Maior nota das provas: " + maiorNotaProva + "</p> \
                    <p>Menor nota das provas: " + menorNotaProva + "</p> \
                    <p>Média dos trabalhos: " + mediaTrabalhos + "</p> \
                    <p>Maior nota dos trabalhos: " + maiorNotaTrabalho + "</p> \
                    <p>Menor nota dos trabalhos: " + menorNotaTrabalho + "</p> \
                    ")
                })
            });
        }
    });
  });