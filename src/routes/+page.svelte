<script>
    import LangContainer from "$lib/components/LangContainer.svelte";
    import TypingEffect from "$lib/components/TypingEffect.svelte";
    import SimpleCard from "$lib/components/SimpleCard.svelte";
</script>
    
<section class="flex pt-24 pb-12 px-12 h-svh">
    <span class="flex items-center justify-center w-1/3 text-7xl text-zinc-50">
        Precisando reforçar seu vocabulário em outras linguas?
    </span>
    
    <div class="flex items-center justify-center flex-grow text-5xl">
        <span class="text-zinc-50">Então veio ao&nbsp;</span>
        <TypingEffect />
        <span class="text-zinc-50">&nbsp;certo!</span>
    </div>
</section>

<section id="about" class="flex h-svh bg-slate-200 min-h-48">
    <span>
        Vocabys é uma aplicação experimental que une a curiosidade de aprender novas linguas com o potencial
        das IAs generativas.
    </span>
    <SimpleCard 
        iconName = "question-mark"
        cardTitle = "teste"
        cardContent = "mais teste ainda" 
    />
    <SimpleCard 
        iconName = "bulb"
        cardTitle = "teste"
        cardContent = "outro teste"
    />
</section>

<section id="start" class="flex flex-col h-6 items-center p-4">
    <span>Escolha qual língua quer aprender e comece agora!</span>
    <LangContainer />
</section>
