<script lang="ts">
    import { onMount } from 'svelte';
  
    const phrases = ["lugar", "place", "lieu", "場所", "장소"];
    let currentPhraseIndex = 0;
    let displayedText = '';
  
    function typePhrase(phrase: string, delay: number) {
      displayedText = '';
      let i = 0;
  
      const typingInterval = setInterval(() => {
        displayedText += phrase[i++];
        if (i === phrase.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            erasePhrase(phrase.length);
          }, delay);
        }
      }, 200);
    }
  
    function erasePhrase(length: number) {
      let i = length;
      const erasingInterval = setInterval(() => {
        displayedText = displayedText.slice(0, --i);
        if (i < 0) {
          clearInterval(erasingInterval);
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          typePhrase(phrases[currentPhraseIndex], 2000);
        }
      }, 100);
    }
  
    onMount(() => {
        typePhrase(phrases[currentPhraseIndex], 2000);
    });
</script>

<span class="text-zinc-50 text-glow">{displayedText}</span>

<style>
    .text-glow {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 
                    0 0 20px rgba(0, 255, 255, 0.507),  
                    0 0 30px rgba(0, 255, 255, 0.6),  
                    0 0 40px rgba(0, 255, 255, 0.6);
    }
</style>
