<script>
    import LangContainer from "$lib/components/LangContainer.svelte";
    import TypingEffect from "$lib/components/TypingEffect.svelte";
    import SimpleCard from "$lib/components/SimpleCard.svelte";
</script>
    
<section class="flex pt-24 pb-12 px-12 h-svh">
    <div class="flex items-center justify-center w-1/3 px-6">
        <span class="text-7xl text-zinc-50">
            Precisando reforçar seu vocabulário em outras linguas?
        </span>
    </div>
    
    <div class="flex items-center justify-center flex-grow text-5xl">
        <span class="text-zinc-50">Então veio ao&nbsp;</span>
        <TypingEffect />
        <span class="text-zinc-50">&nbsp;certo!</span>
    </div>
</section>

<section id="about" class="flex p-6 bg-slate-300 h-svh">
    <div class="grid grid-cols-4 gap-4 items-center justify-center px-6">
        <div class="col-span-2">
            <span class="text-4xl text-justify">
                Vocabys é uma aplicação experimental que une a curiosidade de aprender novas linguas com o potencial das IAs generativas.
            </span>
        </div>
        <div class="col-span-2 flex items-center justify-center flex-grow space-x-4">
            <SimpleCard 
                iconName = "question-mark"
                cardTitle = "Problema"
                cardContent = "Um dos maiores desafios ao aprender uma nova língua é expandir o vocabulário, uma habilidade fundamental para a fluência. Sem um vocabulário amplo, a comunicação torna-se limitada e frustrante." 
            />
            <SimpleCard 
                iconName = "bulb"
                cardTitle = "Solução"
                cardContent = "Aproveitando o poder das IAs generativas, o Vocabys oferece uma maneira intuitiva e eficiente de ampliar o vocabulário. Com apenas alguns cliques, o usuário tem acesso a palavras organizadas por conceitos, facilitando tanto o aprendizado de novos termos quanto a revisão de palavras já conhecidas."
            />
        </div>
    </div>
</section>

<section id="start" class="flex flex-col justify-center items-center h-60 p-4">
    <span class="text-2xl text-zinc-50 mb-4">Escolha qual língua quer aprender e comece agora!</span>
    <LangContainer />
</section>
