// toggle chat window
document.getElementById('chatToggle').onclick = () => {
    const c = document.querySelector('.botui-container');
    c.style.display = c.style.display === 'block' ? 'none' : 'block';
  };
  
  // init BotUI
  const bot = new BotUI('botui-app');
  let knowledge = [];
  fetch('data/knowledgebase.json')
    .then(r => r.json()).then(kb => knowledge = kb);
  
  function askNext() {
    bot.action.text({ action: { placeholder: 'Ask me about Lesego…' }})
      .then(res => handle(res.value));
  }
  
  function handle(input) {
    const q = input.toLowerCase();
    const match = knowledge.find(item =>
      q.includes(item.question.toLowerCase()));
    const reply = match ? match.answer : 
      "Sorry, I don't know that yet. You can update my knowledgebase!";
    bot.message.add({ content: reply }).then(askNext);
  }
  
  // start conversation
  bot.message.add({ content: '👋 Hi, I’m Lesego’s portfolio bot. Ask me anything!' })
    .then(askNext);
  