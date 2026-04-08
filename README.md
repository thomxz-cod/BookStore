# PROJETO BOOKSTORE 1 

## 1. Middleware (Express)
- Funções que interceptam requisições. O express.json() permite que o servidor leia JSON enviado por apps mobile.

## 2. NoSQL vs SQL

- NoSQL (MongoDB): flexível, ideal para mudanças frequentes
- SQL (MySQL): estrutura fixa, mais controle

## 3. Hashing (bcryptjs)
- O bcryptjs transforma senhas em hashes irreversíveis, protegendo dados mesmo em vazamentos.

## 4. .env e dotenv
- O dotenv guarda dados sensíveis fora do código, evitando exposição no GitHub e melhorando a segurança.
---

<br>
<br>
<br>

# PROJETO BOOKSTORE 2

## 📱 Workflow de Signup (Resumo Explicativo)

### 🧩 Como Funciona:

O processo de signup é o fluxo onde um usuário cria uma conta no aplicativo.

1. **Preenchimento do formulário:**  
   O usuário informa username, email e password no app (React Native).

2. **Validação no frontend:**  
   O app verifica se os campos estão preenchidos corretamente (ex: email válido, senha mínima).

3. **Envio dos dados:**  
   As informações são enviadas para o backend através de uma requisição HTTP (POST).

4. **Validação no backend:**  
   O servidor valida novamente os dados e verifica se já existe um usuário com o mesmo email.

5. **Criptografia da senha:**  
   A senha é transformada em um hash seguro antes de ser salva.

6. **Armazenamento no banco:**  
   Os dados do usuário são armazenados no MongoDB com a senha criptografada.

7. **Resposta para o app:**  
   O backend retorna sucesso (usuário criado) ou erro (ex: email já existente).

---

### 🔐 Importância:

Esse fluxo garante:
- Segurança dos dados do usuário  
- Integridade das informações  
- Comunicação correta entre app e servidor  

---

### 📌 Resumo

* O signup é um processo que valida, protege e armazena os dados do usuário de forma segura antes de permitir acesso ao sistema.
--- 

<br>
<br>
<br>


# REACT NATIVE - CONSTRAINTS

## 🧪 Resumo: Constraints e Tipos de Dados no Postman

Constraints (restrições) e tipos de dados garantem que apenas informações válidas sejam aceitas por uma API.

- **Constraints** definem regras (ex: idade não pode ser negativa, e-mail deve ser único).  
- **Tipos de dados** asseguram que cada campo tenha o formato correto (texto, número, booleano).

No Postman, essas validações funcionam como uma primeira linha de teste, impedindo que dados inválidos cheguem ao aplicativo **React Native**, evitando erros, falhas e comportamentos inesperados.

👉 Resultado: aplicações mais estáveis, seguras e confiáveis.