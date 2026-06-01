# 🌊 Akwaarium — Streamer Media Kit & Landing Page

> 🚀 **Status do Projeto:** MVP (Mínimo Produto Viável) em desenvolvimento ativo.

Uma Landing Page e Media Kit dinâmico desenvolvido para a streamer **Akwaarium** (Twitch). O objetivo deste projeto é centralizar a transmissão ao vivo, exibir métricas de desempenho em tempo real para potenciais marcas/parceiros e oferecer um canal direto de contato profissional.

👉 **[Acesse a aplicação ao vivo aqui](https://akwaarium.com.br/)**

---

## ✨ Funcionalidades Atuais (MVP)

A versão atual foca na experiência do usuário, conversão de novos membros para a comunidade e exposição de dados comerciais:

*   **🎬 Integração de Transmissão:** Player da Twitch e chat integrados diretamente na página (`iframes` oficiais) para retenção de público.
*   **📊 Media Kit Dinâmico:** Consumo em tempo real da API do TwitchTracker para renderizar estatísticas como total de seguidores, média de espectadores e horas assistidas.
*   **📩 Formulário de Contato com API:** Sistema de contato integrado que realiza requisições para um endpoint interno (`/api/send-email`) para processar mensagens comerciais de forma assíncrona.
*   **🎨 UI/UX Responsiva com Efeitos:** Menu hambúrguer interativo para dispositivos móveis, barra de carregamento dinâmica (`Preloader`), rolagem suave (`Smooth Scroll`) e indicador de seção ativa via `Intersection Observer API`.
*   **🔍 Otimização de SEO:** Configuração avançada de Meta Tags e protocolo *Open Graph* para compartilhamento ideal em redes sociais (WhatsApp, Twitter, Facebook).

---

## 🗺️ Roadmap de Atualizações

O projeto foi desenhado para ser escalável. Abaixo estão as melhorias mapeadas para as próximas versões:

### ⏳ Próximas Implementações (Média/Alta Prioridade)
- [ ] **Segurança de Credenciais:** Migração de variáveis sensíveis (chaves de API e senhas de e-mail) para um arquivo `.env`.
- [ ] **Fallback de API:** Adicionar uma camada de cache ou dados estáticos de segurança caso a API de estatísticas falhe ou fique fora do ar.
- [ ] **Testes de Performance:** Otimização de imagens do diretório `assets/img` para melhorar a nota no Google Lighthouse.

### 🔮 Visão de Futuro (Evolução do Produto)
- [ ] **Painel Administrativo:** Interface restrita para o streamer atualizar parceiros e links sem precisar mexer no código.
- [ ] **Componentização com Framework:** Migração da arquitetura atual em HTML/JS Vanilla para **React.js** ou **Next.js** para facilitar a escalabilidade.

---

## 🛠️ Tecnologias Utilizadas

O ecossistema do projeto foi construído utilizando tecnologias web fundamentais e pacotes modernos:

*   **Front-end:** HTML5, CSS3 (Variáveis, Grid e Flexbox) e JavaScript Vanilla (ES6+).
*   **Efeitos & Animações:** CSS Keyframes e JavaScript para controle do `Preloader`.
*   **Backend / API:** Node.js com o pacote [Nodemailer](https://nodemailer.com/) para gerenciamento de e-mails.

---

## 📦 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
```bash
   git clone [https://github.com/seu-usuario/akwaarium.git](https://github.com/seu-usuario/akwaarium.git)
