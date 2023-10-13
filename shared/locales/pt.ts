import { Dict } from './en';

export const pt: Dict = {
  siteName: 'Arelys Borgia Agente de Seguros',
  keywords: 'saúde, vida, seguro, ObamaCare, cobertura',
  header: {
    nav1: 'Navegação Primária',
    nav2: 'Idiomas e Links de contato',
    lang: 'Selecione sua lingua',
    follow: 'Me siga no Instagram',
    services: 'Coberturas',
    aboutMe: 'Sobre mim',
    quote: 'Orçamento Gratuito',
    blog: 'Notícias',
  },
  hero: {
    title: 'Cobertura médica ao seu alcance',
    tagline: 'ACOMPANHAMOS VOCÊ EM TODAS AS ETAPAS',
  },
  values: {
    '1': 'Integridade',
    '2': 'Paixão',
    '3': 'Excelência em Serviços',
    '4': 'Inclusão',
    '5': 'Satisfação',
    '6': 'Colaboração',
  },
  coverages: {
    title: 'Obtenha a melhor cobertura de saúde ao melhor preço!',
    '1': {
      name: 'ObamaCare',
      description:
        'É uma reforma da saúde nos EUA que expande e melhora o acesso aos cuidados de saúde e reduz os gastos por meio de regulamentações e impostos.',
    },
    '2': {
      name: 'Proteção de hipoteca',
      description:
        'É um tipo de apólice de seguro que ajuda sua família a fazer seus pagamentos mensais da hipoteca se você morrer antes que sua hipoteca seja totalmente paga. Algumas apólices também oferecem cobertura por tempo limitado se você perder o emprego ou ficar incapacitado após um acidente.',
    },
    '3': {
      name: 'Seguro de vida',
      description:
        'Quanto custa a tranquilidade? Você sabia que seu dinheiro pode crescer com nossas políticas de vida? Economize para a Universidade de seus filhos,Economize para minha aposentadoria. Ao mesmo tempo, eles protegem você com benefícios Vitalícios: Pagamento por Doença Terminal, Pagamento por Doença Crônica, Pagamento por Doença Crítica, Pagamento por Lesão Crítica, Pagamento em Caso de Morte.',
    },
    '4': {
      name: 'Seguro de acidentes',
      description:
        'O seguro de despesas finais é um tipo de seguro de vida inteira destinado a cobrir despesas médicas e despesas de funeral quando você morre Uma política de despesas finais também é conhecida como seguro funeral ou enterro e é popular entre os idosos.',
    },
  },
  other: 'Outro',
  quote: {
    name: {
      label: 'Nome',
      required: 'O nome é obrigatório.',
      min: 'Nome muito curto.',
    },
    fullname: {
      label: 'Nome completo',
      required: 'O nome completo é obrigatório.',
      min: 'O nome completo é muito curto.',
    },
    email: {
      label: 'Email',
      invalid: 'Entre com um email válido.',
      required: 'O e-mail é obrigatório.',
    },
    phone: {
      label: 'Número de telefone',
      required: 'O número de telefone é obrigatório.',
      invalid: 'Insira um número de telefone válido.',
    },
    additionalInfo: {
      label: 'Informações adicionais',
      max: 'As Informações Adicionais não devem exceder 500 caracteres.',
    },
    insurance: {
      label: 'Cobertura do seguro',
      placeholder: 'Selecione uma cobertura de seguro.',
      required: 'Selecione uma cobertura de seguro.',
    },
    acknowledgement: {
      label: 'Reconheço que, ao clicar em enviar, concordo com os Termos e o Aviso de Privacidade.',
      required:
        'Para usar nossos serviços, você precisa concordar com nossos Termos e Aviso de Privacidade. Marque a caixa para confirmar.',
    },
    recaptcha: {
      required: 'A verificação reCAPTCHA é necessária.',
    },
    success:
      'Obrigado! Recebemos suas informações e entraremos em contato o mais breve possível.',
    error:
      'Lamentamos, mas nosso servidor encontrou um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.',
    uniqueError:
      'Parece que você já enviou uma solicitação de orçamento. Estamos trabalhando nisso e entraremos em contato com você o mais breve possível.',
    uniqueConcentError:
      'Parece que você já enviou uma solicitação de consentimento do cliente. Não há necessidade de nenhuma ação adicional de sua parte. Obrigado pela sua cooperação.',
    submit: 'Enviar cotação',
  },
  footer: 'Cuide do seu presente olhando para o futuro.',
};
