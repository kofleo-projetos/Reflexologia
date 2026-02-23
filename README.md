# 🌸 Sistema Adeline Milani – Guia de Instalação

## ⚡ Como colocar no ar (GitHub Pages + Firebase)

---

### 1. Criar projeto no Firebase

1. Acesse: https://console.firebase.google.com
2. Clique em **"Adicionar projeto"** → dê um nome (ex: `adeline-sistema`)
3. No menu lateral: **Firestore Database** → "Criar banco de dados" → **modo de produção** → escolha a região `southamerica-east1`
4. No menu lateral: **Configurações do projeto** → **"Seus apps"** → clique em `</>` (Web)
5. Registre o app e copie as credenciais que aparecem

---

### 2. Configurar o `index.html`

Abra o arquivo `index.html` e localize este trecho (por volta da linha 280):

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};
```

Substitua pelos valores copiados do Firebase. ✅

---

### 3. Regras do Firestore

No Firebase Console → Firestore → **Regras**, cole:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

> ⚠️ Para produção real, adicione autenticação depois!

---

### 4. Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `adeline-sistema`)
2. Faça upload dos 3 arquivos:
   - `index.html`
   - `manifest.json`
   - `sw.js`
3. Vá em **Settings → Pages**
4. Source: **Deploy from a branch** → branch `main` → pasta `/root`
5. Clique **Save**

Seu sistema estará online em:
`https://SEU-USUARIO.github.io/adeline-sistema/`

---

## 📲 Instalar como app no celular

1. Abra o link no **Chrome (Android)** ou **Safari (iPhone)**
2. Toque no menu → **"Adicionar à tela inicial"**
3. O app vai aparecer na tela inicial como um aplicativo nativo! 🎉

---

## 🗂️ Coleções criadas automaticamente no Firestore

| Coleção | Descrição |
|---|---|
| `clientes` | Cadastro de clientes |
| `atendimentos` | Histórico de atendimentos |
| `agenda` | Agendamentos futuros |
| `configuracoes` | Custos e valores padrão |

---

## 💡 Dicas extras

- Primeiro acesse **⚙️ Config.** e preencha os valores de custo por km e insumos
- Depois cadastre seus clientes em **👤 Clientes**
- Registre atendimentos em **✍️ Atendimento** — o custo é calculado automaticamente!
- O **📊 Dashboard** mostra o próximo agendamento logo no topo

Qualquer dúvida, é só perguntar! 💕
