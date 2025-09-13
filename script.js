// Matrix effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
const binary = '01';

const alphabet = katakana + latin + nums + symbols + binary;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
    
    requestAnimationFrame(draw);
}

// Terminal typing effect
const terminalText = document.getElementById('typing-text');
const commandLine = document.getElementById('command-line');
const commandInput = document.getElementById('command-input');

const messages = [
    { text: "Initializing AISLE stack...", delay: 50 },
    { text: "Loading client-ready modules...", delay: 50 },
    { text: "██████████████ 100%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 200 },
    { text: "> Welcome to AISLE TERMINAL // ACCESS GRANTED", delay: 10, style: "color: #0f0; font-weight: bold" },
    { text: "\n\n", delay: 100 },
    { text: ">> AISLE PROFILE <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "> NAME: ", delay: 20 },
    { text: "AISLE PARTNERS", delay: 100, style: "color: #0ff; font-weight: bold" },
    { text: "", delay: 100, style: "color: #0f0; font-weight: bold" },
    { text: "\n", delay: 50 },
    { text: "> TITLE: ", delay: 20 },
    { text: "AI Strategy, Leads, Expansion - AI Automations & Consultation", delay: 50, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> LOCATION: ", delay: 20 },
    { text: "Global", delay: 70, style: "color: #f44" },
    { text: "\n", delay: 50 },
    { text: "> STATUS: ", delay: 20 },
    { text: "ACTIVE // CLIENT ACCESS: AUTHORIZED", delay: 50, style: "color: #0f0" },
    { text: "\n\n", delay: 100 },
    { text: ">> CAPABILITY MATRIX <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "- Helping SMEs integrate AI into their businesses", delay: 20 },
    { text: "\n", delay: 50 },
    { text: "- Identifying opportunities to grow revenues and save costs", delay: 20 },
    { text: "\n", delay: 50 },
    { text: "- Advising SMEs and serving as a strategic advisor to a leading AI platform", delay: 20 },
    { text: "\n\n", delay: 100 },
    { text: "> Python/Django/HTMX/Tailwind: ", delay: 20 },
    { text: "██████████ 95%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> Front-end (Alpine.js/HTMX): ", delay: 20 },
    { text: "█████████▋ 97%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> Data Governance & SOPs: ", delay: 20 },
    { text: "████████▉ 88%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> Cloud & Storage (AWS/S3): ", delay: 20 },
    { text: "████████▊ 86%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> GenAI (RAG, TTS, Vision): ", delay: 20 },
    { text: "███████▍ 75%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> Workflow Automation (n8n) - experts. Strong community connection: ", delay: 20 },
    { text: "██████████ 95%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> RAG Chatbots & Vector DBs: ", delay: 20 },
    { text: "██████████ 95%", delay: 30, style: "color: #0ff" },
    { text: "\n\n", delay: 100 },
    { text: ">> SELECTED WORK <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "> Automated loan servicing for $600m debt portfolio // ", delay: 20 },
    { text: "LIVE", delay: 30, style: "color: #0f0" },
    { text: "\n", delay: 50 },
    { text: "> Custom AI analyst deployment on $100m live PE transaction // ", delay: 20 },
    { text: "ACTIVE", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> Strategic advisor to a global AI enablement platform // ", delay: 20 },
    { text: "ADVISORY", delay: 30, style: "color: #b19cd9" },
    { text: "\n", delay: 50 },
    { text: "> AI-driven lead evaluation & client screening tool // ", delay: 20 },
    { text: "LIVE", delay: 30, style: "color: #0f0" },
    { text: "\n", delay: 50 },
    { text: "> Governance, SOPs, board setup & funding strategy consulting // ", delay: 20 },
    { text: "ADVISORY", delay: 30, style: "color: #b19cd9" },
    { text: "\n", delay: 50 },
    { text: "> Content automation (blogs & socials) for short-stay tourism // ", delay: 20 },
    { text: "LIVE", delay: 30, style: "color: #0f0" },
    { text: "\n", delay: 50 },
    { text: "> Newsletter & sector updates automation for credit finance firm // ", delay: 20 },
    { text: "LIVE", delay: 30, style: "color: #0f0" },
    { text: "\n", delay: 50 },
    { text: "> RAG-powered chatbots with custom knowledge bases // ", delay: 20 },
    { text: "DEPLOYED", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> Creative Studio: GenAI images, video, and text-to-voice automation // ", delay: 20 },
    { text: "LIVE", delay: 30, style: "color: #0f0" },
    { text: "\n\n", delay: 100 },
    { text: ">> CONTACT & LINKS <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "> EMAIL: ", delay: 20 },
    { text: "hello@aisle.partners", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> Website: ", delay: 20 },
    { text: "aisle.partners", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> App: ", delay: 20 },
    { text: "app.aisle.partners", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> Book a call: ", delay: 20 },
    { text: "calendly.com/aisle-partners", delay: 30, style: "color: #0ff" },
    { text: "\n\n", delay: 100 },
    { text: "> Type 'help' for available commands", delay: 30, style: "color: #0f0" },
    { text: "\n", delay: 50 },
];

let currentMessageIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function typeNextCharacter() {
    if (currentMessageIndex >= messages.length) {
        isTyping = false;
        commandLine.classList.remove('hidden');
        commandInput.focus();
        return;
    }
    
    const currentMessage = messages[currentMessageIndex];
    const textToType = currentMessage.text;
    
    if (currentCharIndex < textToType.length) {
        const char = textToType.charAt(currentCharIndex);
        const span = document.createElement('span');
        span.textContent = char;
        
        if (currentMessage.style) {
            span.style = currentMessage.style;
        }
        
        terminalText.appendChild(span);
        currentCharIndex++;
        
        setTimeout(typeNextCharacter, currentMessage.delay);
    } else {
        currentMessageIndex++;
        currentCharIndex = 0;
        setTimeout(typeNextCharacter, 100);
    }
}

function processCommand(command) {
    terminalText.appendChild(document.createElement('br'));
    
    const prompt = document.createElement('span');
    prompt.textContent = '> ';
    prompt.style.color = '#0f0';
    terminalText.appendChild(prompt);
    
    const cmdText = document.createElement('span');
    cmdText.textContent = command;
    cmdText.style.color = '#e0e0e0';
    terminalText.appendChild(cmdText);
    
    terminalText.appendChild(document.createElement('br'));
    
    const response = document.createElement('div');
    response.style.marginTop = '10px';
    
    command = command.toLowerCase().trim();
    
    if (command === 'help') {
        response.innerHTML = `Available commands:<br>
        - <span class="highlight">about</span>: What AISLE does<br>
        - <span class="highlight">capabilities</span>: Our core strengths<br>
        - <span class="highlight">work</span>: Selected client projects<br>
        - <span class="highlight">contact</span>: How to reach us<br>
        - <span class="highlight">clear</span>: Clear the terminal<br>
        - <span class="highlight">exit</span>: Close terminal (just kidding)`;
    } 
    else if (command === 'about') {
        response.innerHTML = `// AISLE //<br><br>
        <span class="highlight">AISLE Partners</span> blends deep consulting and finance expertise with hands-on AI automation delivery.<br><br>
        We combine:<br>
        - Strong analytical and strategic consulting experience<br>
        - A proven finance and governance background<br>
        - Advanced technical skills in Python, Django, RAG & GenAI<br>
        - Automation expertise (n8n, APIs, workflow orchestration)<br>
        - Close ties with leading AI platforms and global communities<br><br>
        This mix lets us advise at board level <em>and</em> implement practical AI solutions that scale with measurable ROI.`;
    } 
    else if (command === 'capabilities' || command === 'skills') {
        response.innerHTML = `>> CAPABILITY MATRIX <<<br><br>
        <div class="skill-bar"><span class="skill-name">Python/Django/HTMX:</span> <span class="skill-level" style="width: 95%"></span></div>
        <div class="skill-bar"><span class="skill-name">Front-end (Alpine.js/HTMX):</span> <span class="skill-level" style="width: 97%"></span></div>
        <div class="skill-bar"><span class="skill-name">Governance & SOPs:</span> <span class="skill-level" style="width: 88%"></span></div>
        <div class="skill-bar"><span class="skill-name">Cloud & Storage (AWS/S3):</span> <span class="skill-level" style="width: 86%"></span></div>
        <div class="skill-bar"><span class="skill-name">GenAI (RAG, TTS, Vision):</span> <span class="skill-level" style="width: 75%"></span></div>
        <div class="skill-bar"><span class="skill-name">Workflow Automation (n8n):</span> <span class="skill-level" style="width: 95%"></span></div>
        <div class="skill-bar"><span class="skill-name">RAG Chatbots & Vector DBs:</span> <span class="skill-level" style="width: 95%"></span></div>`;
    } 
    else if (command === 'work') {
        response.innerHTML = `>> SELECTED WORK <<<br><br>
        > Automated loan servicing for $600m debt portfolio // <span style="color:#0f0">LIVE</span><br>
        > Custom AI analyst deployment on $100m live PE transaction // <span style="color:#0ff">ACTIVE</span><br>
        > Strategic advisor to a global AI enablement platform // <span style="color:#b19cd9">ADVISORY</span><br>
        > AI-driven lead evaluation & client screening tool // <span style="color:#0f0">LIVE</span><br>
        > Governance, SOPs, board setup & funding strategy consulting // <span style="color:#b19cd9">ADVISORY</span><br>
        > Content automation (blogs & socials) for short-stay tourism // <span style="color:#0f0">LIVE</span><br>
        > Newsletter & sector updates automation for credit finance firm // <span style="color:#0f0">LIVE</span><br>
        > RAG-powered chatbots with custom knowledge bases // <span style="color:#0ff">DEPLOYED</span><br>
        > Creative Studio: GenAI images, video, and text-to-voice automation // <span style="color:#0f0">LIVE</span>`;
    }
    else if (command === 'contact') {
        response.innerHTML = `>> CONTACT & LINKS <<<br><br>
        <div class="contact-item">Email: <a href="mailto:hello@aisle.partners">hello@aisle.partners</a></div>
        <div class="contact-item">Website: <a href="https://aisle.partners" target="_blank">aisle.partners</a></div>
        <div class="contact-item">App: <a href="https://app.aisle.partners" target="_blank">app.aisle.partners</a></div>
        <div class="contact-item">Book a call: <a href="https://calendly.com/aisle-partners" target="_blank">calendly.com/aisle-partners</a></div>`;
    }
    else if (command === 'clear') {
        terminalText.innerHTML = '';
        commandInput.value = '';
        return;
    }
    else if (command === 'exit') {
        response.innerHTML = `<span style="color: #f44">Access Denied: Terminal cannot be closed from this session.</span>`;
    }
    else {
        response.innerHTML = `<span style="color: #f44">Command not found: ${command}</span><br>
        Type <span class="highlight">'help'</span> for available commands.`;
    }
    
    terminalText.appendChild(response);
    terminalText.appendChild(document.createElement('br'));
    commandLine.scrollIntoView();
}

commandInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = this.value;
        this.value = '';
        
        if (command.trim() !== '') {
            processCommand(command);
        }
    }
});

// Start animations
window.addEventListener('load', function() {
    draw();
    typeNextCharacter();
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
