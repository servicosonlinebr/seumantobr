# 🇧🇷 E-Commerce Camisas Copa do Brasil - Guia de Setup

## 📋 Visão Geral

Este é um projeto React/Next.js completo para venda de camisas oficiais da seleção brasileira. A página foi otimizada para máxima conversão com:

- ✅ Design profissional com paleta verde/amarelo da bandeira brasileira
- ✅ Hero section com imagem ampliada e de qualidade máxima
- ✅ Galeria com 9 imagens de produtos
- ✅ Simulador 3D de tamanhos com calculadora
- ✅ Múltiplas opções de compra com preços destacados
- ✅ Countdown timer para urgência
- ✅ Som "GOLLLLL" do Galvão Bueno
- ✅ Formulário de entrega profissional
- ✅ Links de pagamento integrados
- ✅ 100% otimizado para mobile

---

## 🚀 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** 18.0.0 ou superior ([Download](https://nodejs.org/))
- **npm** ou **yarn** (vem com Node.js)
- **Git** (opcional, para clonar repositórios)

---

## 📦 Instalação Passo a Passo

### 1️⃣ Criar um novo projeto Next.js com shadcn/ui

```bash
npx create-next-app@latest brasil-shirts \
  --typescript \
  --tailwind \
  --app \
  --eslint \
  --no-src-dir \
  --no-git \
  --import-alias '@/*'
```

Quando perguntado:
- TypeScript? → **Y**
- Tailwind CSS? → **Y**
- Use `app` router? → **Y**
- ESLint? → **Y**

### 2️⃣ Acessar o diretório do projeto

```bash
cd brasil-shirts
```

### 3️⃣ Instalar shadcn/ui (opcional, já incluímos o botão manual)

```bash
npx shadcn-ui@latest init
```

### 4️⃣ Instalar dependências adicionais

```bash
npm install framer-motion lucide-react
```

### 5️⃣ Criar a estrutura de pastas

```bash
mkdir -p app/components app/lib
```

---

## 📁 Estrutura do Projeto

```
brasil-shirts/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (COMPONENTE PRINCIPAL)
│   ├── globals.css
│   └── components/
│       └── (componentes reutilizáveis)
├── public/
│   └── (imagens estáticas)
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── (outros componentes shadcn)
├── lib/
│   └── utils.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Integração do Componente Principal

### 1. Copiar o arquivo principal

Copie o conteúdo do arquivo `brasil-shirts.tsx` para:

```bash
app/page.tsx
```

### 2. Criar arquivo de utilidades

Crie `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Instale as dependências necessárias:
```bash
npm install clsx tailwind-merge
```

### 3. Criar componente Button (shadcn/ui)

Crie `components/ui/button.tsx`:

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### 4. Configurar Tailwind CSS

Edite `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brasil-green': '#047857',
        'brasil-yellow': '#FCD34D',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(4, 120, 87, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(4, 120, 87, 0.8)' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config

export default config
```

### 5. Configurar CSS Global

Edite `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Space Grotesk', sans-serif;
  background: #0f172a;
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: #047857;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #FCD34D;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.image-shadow {
  filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 50px rgba(4, 120, 87, 0.3));
}

.gradient-text {
  background: linear-gradient(135deg, #047857 0%, #FCD34D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.premium-card {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.btn-glow {
  position: relative;
  overflow: hidden;
}

.btn-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-glow:hover::before {
  left: 100%;
}
```

### 6. Configurar Layout Raiz

Edite `app/layout.tsx`:

```typescript
import type { Metadata } from "next"
import { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Copa do Brasil - Camisa Oficial",
  description: "Camisa oficial da seleção brasileira. Qualidade premium, frete grátis e entrega rápida.",
  openGraph: {
    title: "Copa do Brasil - Camisa Oficial",
    description: "Camisa oficial da seleção brasileira",
    images: [
      {
        url: "https://ibb.co/gFtcGtCv",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
```

---

## 🎵 Áudio Galvão Bueno

A aplicação inclui um som "GOLLLLL!" ao clicar em "Comprar Agora". 

**Para usar áudio customizado:**

1. **Opção 1: Web Speech API (Grátis)**
   - Já implementado no código
   - Funciona em navegadores modernos
   - Sintetiza voz em tempo real

2. **Opção 2: Arquivo de Áudio Customizado**
   - Substitua a URL do áudio no arquivo HTML/componente
   - Use uma ferramenta como Eleven Labs ou Google Text-to-Speech
   - Hospede em um CDN (Cloudinary, AWS S3, etc)

3. **Opção 3: FFmpeg (Para gerar áudio Galvão Bueno)**
```bash
# Instale ffmpeg
# Gere um áudio com sua voz ou use uma API de síntese
```

---

## 🚀 Executar o Projeto

```bash
npm run dev
```

A aplicação estará disponível em: **http://localhost:3000**

---

## 🔧 Otimizações para Mobile

A página já está 100% otimizada para mobile com:

- ✅ Responsive grid (1 coluna mobile, 2 em tablet, 3+ em desktop)
- ✅ Tamanhos de fonte adaptativos (sm: para mobile, padrão para desktop)
- ✅ Padding responsivo
- ✅ Imagens otimizadas com lazy loading
- ✅ Botões com tamanho adequado para toque
- ✅ Formulário mobile-first

---

## 📱 Testes em Mobile

### Usar Chrome DevTools:
1. Abra a página no navegador
2. Pressione `F12` ou `Ctrl+Shift+I`
3. Clique em "Toggle device toolbar" (ou Ctrl+Shift+M)
4. Teste em diferentes resoluções

### Testar em dispositivo real:
```bash
# Encontre o IP da sua máquina
ipconfig getifaddr en0  # macOS
hostname -I  # Linux
ipconfig  # Windows

# Acesse no seu celular
http://<seu-ip>:3000
```

---

## 🎯 Checklist de Implementação

- [ ] Node.js 18+ instalado
- [ ] Projeto Next.js criado com Tailwind e TypeScript
- [ ] Dependências instaladas (framer-motion, lucide-react)
- [ ] Arquivo principal (brasil-shirts.tsx) copiado para app/page.tsx
- [ ] Componente Button criado
- [ ] Tailwind config customizado
- [ ] CSS global configurado
- [ ] Layout raiz criado
- [ ] Projeto rodando em http://localhost:3000
- [ ] Testado em mobile
- [ ] Links de pagamento configurados
- [ ] Áudio Galvão Bueno funcionando

---

## 🔗 Links Importantes

- **Documentação Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/
- **shadcn/ui**: https://ui.shadcn.com/

---

## 📞 Suporte e Melhorias

### Possíveis Melhorias Futuras:

1. **Analytics**: Adicione Google Analytics ou Hotjar
2. **SEO**: Otimize meta tags e schema.org
3. **Conversão**: A/B test diferentes variações
4. **Email**: Integre com Mailchimp para newsletter
5. **CRM**: Sincronize com ferramentas de CRM
6. **Estoque**: Adicione gerenciamento de inventário
7. **Reviews**: Implemente sistema de avaliações
8. **Live Chat**: Adicione suporte ao cliente
9. **Upsell**: Sugestões de produtos relacionados
10. **Retargeting**: Pixel do Facebook/Google

---

## 📄 Licença

Este projeto é fornecido como está para fins comerciais.

---

**Desenvolvido com ❤️ para a seleção brasileira** 🇧🇷⚽

```
   🟢 🟡
   █ █
  ███████
  █     █
  █ ⚽  █
  █     █
  ███████
   █   █
   🟢 🟡
```
