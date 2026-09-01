// src/data/tutor-content.ts
// Base de conteúdo didático da extensão.
// O texto principal é em português, mas preserva termos técnicos em inglês conforme a convenção do GitHub.

export type TutorEntry = {
  title: string;
  category: string;
  description: string;
  tip?: string;
};

export type TutorLanguage = 'pt' | 'en' | 'es';

const BASE_TUTOR_CONTENT: Record<string, TutorEntry> = {
  fork: {
    title: 'Fork',
    category: 'Repositório',
    description:
      'O botão Fork cria uma cópia do projeto na sua conta. Isso permite experimentar mudanças sem mexer no repositório original, ideal para aprender e testar novas ideias com segurança.',
    tip: 'Use Fork quando você quer testar ou melhorar algo sem afetar o projeto principal.'
  },
  watch: {
    title: 'Watch',
    category: 'Notificações',
    description:
      'O recurso Watch acompanha o fluxo do repositório e avisa quando há eventos importantes, como commits, issues, pull requests e comentários.',
    tip: 'É útil para acompanhar projetos em andamento sem precisar visitar a página toda hora.'
  },
  star: {
    title: 'Star',
    category: 'Favoritos',
    description:
      'O botão Star serve como marcador de interesse. Você pode guardar projetos que gosta e demonstrar apoio ao criador e à comunidade.',
    tip: 'Star funciona como um favorito de GitHub, não como um sinal de aprovação automática de código.'
  },
  codeTab: {
    title: 'Code',
    category: 'Navegação',
    description:
      'A aba Code mostra a estrutura do repositório, com arquivos, pastas, branches e o conteúdo principal do projeto. É o ponto de entrada mais importante para explorar o código.',
    tip: 'Aqui você entra na árvore do repositório e navega pela base real do projeto.'
  },
  issuesTab: {
    title: 'Issues',
    category: 'Colaboração',
    description:
      'Issues são pedidos de ajuda, relatórios de bug, ideias de melhoria e conversas públicas. É o canal principal para discutir melhorias antes de codificar.',
    tip: 'Se algo não funciona ou pode ser melhorado, a Issue normalmente é o lugar certo para abrir a conversa.'
  },
  pullRequestsTab: {
    title: 'Pull requests',
    category: 'Colaboração',
    description:
      'Pull requests são propostas de alteração. Elas mostram o que você mudou, comparametrada a revisão e servem para discutir código antes de integrar no projeto principal.',
    tip: 'Um good pull request explica o problema, a solução e o motivo da mudança.'
  },
  actionsTab: {
    title: 'Actions',
    category: 'Automação',
    description:
      'Actions é a ferramenta de automação do GitHub. Aqui você pode rodar testes, compilar projetos, publicar artefatos e validar integrações automaticamente.',
    tip: 'É o equivalente a pipelines de CI/CD dentro do GitHub.'
  },
  projectsTab: {
    title: 'Projects',
    category: 'Planejamento',
    description:
      'Projects organiza tarefas e trabalho em quadros visuais. É útil para planejar sprints, acompanhar o progresso e dividir o trabalho em listas.',
    tip: 'É um painel gerencial que ajuda a visualizar o que ainda precisa ser feito.'
  },
  discussionsTab: {
    title: 'Discussions',
    category: 'Comunidade',
    description:
      'Discussions é um espaço para conversa aberta, ideias e troca de conhecimento, fora do fluxo de Issues e pull requests.',
    tip: 'É muito útil para esclarecer dúvidas conceituais e coletar feedback da comunidade.'
  },
  insightsTab: {
    title: 'Insights',
    category: 'Análise',
    description:
      'Insights reúne métricas de atividade do repositório, como contribuidores, frequência de commits, gráfico de evolução e comportamento do projeto ao longo do tempo.',
    tip: 'Esse painel ajuda a entender como o projeto cresce e quem está colaborando.'
  },
  settingsTab: {
    title: 'Settings',
    category: 'Administração',
    description:
      'Settings centraliza as configurações do repositório: permissões, branches protegidas, integrações, segurança e opções gerais do projeto.',
    tip: 'É a área administrativa do projeto e deve ser usada com cuidado.'
  },
  releasesTab: {
    title: 'Releases',
    category: 'Versões',
    description:
      'Releases são versões publicadas do projeto. Elas ajudam a marcar momentos importantes, anunciar mudanças e distribuir builds ou pacotes.',
    tip: 'Use releases para documentar versões estáveis e importantes para usuários e clientes.'
  },
  branchesTab: {
    title: 'Branches',
    category: 'Fluxo de trabalho',
    description:
      'Branches são linhas paralelas de desenvolvimento. Elas permitem criar versões separadas para recursos, correções ou experimentos sem quebrar a branch principal.',
    tip: 'A branch principal costuma ser a branch main ou master e recebe as integrações finais.'
  },
  tagsTab: {
    title: 'Tags',
    category: 'Versionamento',
    description:
      'Tags marcam pontos específicos no histórico, como versões estáveis, releases ou checkpoints importantes do projeto.',
    tip: 'Tags costumam representar versões importantes do software.'
  },
  commitsTab: {
    title: 'Commits',
    category: 'Histórico',
    description:
      'Commits são registros do histórico do repositório. Cada commit representa uma mudança concreta, com mensagem e autoria do desenvolvedor.',
    tip: 'O histórico de commits ajuda a entender como o projeto evoluiu e por quê.'
  },
  readmeTab: {
    title: 'README',
    category: 'Documentação',
    description:
      'O README é a porta de entrada principal do projeto. Ele normalmente explica o objetivo, a instalação, a execução e como contribuir.',
    tip: 'Leia o README antes de começar a mexer no código; ele costuma responder perguntas básicas.'
  },
  packageTab: {
    title: 'Packages',
    category: 'Distribuição',
    description:
      'Packages guarda artefatos e bibliotecas publicadas pelo projeto, como pacotes npm, Docker, Maven ou NuGet.',
    tip: 'É a área para distribuição de componentes reutilizáveis.'
  },
  fileTable: {
    title: 'Estrutura de arquivos',
    category: 'Exploração',
    description:
      'A árvore de arquivos mostra a organização do projeto e ajuda você a localizar pastas, módulos e arquivos específicos do código.',
    tip: 'Uma boa leitura da estrutura reduz muito o tempo de busca dentro de um repositório grande.'
  },
  aboutPanel: {
    title: 'About',
    category: 'Resumo',
    description:
      'O painel About mostra um resumo do projeto, com descrição, tópicos, links importantes e contexto rápido sobre o repositório.',
    tip: 'É uma boa primeira parada para entender o propósito do projeto antes de mergulhar no código.'
  },
  topicsPanel: {
    title: 'Topics',
    category: 'Classificação',
    description:
      'Topics são palavras-chave que categorizam o repositório. Elas ajudam a encontrar projetos por tema, linguagem ou intenção.',
    tip: 'Os Topics melhoram a descoberta do projeto dentro do GitHub.'
  },
  securityPanel: {
    title: 'Security',
    category: 'Segurança',
    description:
      'Security centraliza alertas, vulnerabilidades, relatórios e práticas de proteção do código e das dependências.',
    tip: 'É uma área essencial para quem trabalha com código em produção.'
  },
  licensePanel: {
    title: 'License',
    category: 'Legal',
    description:
      'License mostra a licença sob a qual o projeto é distribuído, determinando como você pode usar, modificar e compartilhar o código.',
    tip: 'Sempre verifique a licença antes de usar um projeto em seus trabalhos.'
  },
  wikiTab: {
    title: 'Wiki',
    category: 'Documentação',
    description:
      'Wiki é um espaço colaborativo para documentação detalhada do projeto, guias de uso, tutoriais e referências técnicas.',
    tip: 'A Wiki é útil para manuais completos e documentação que não cabe no README.'
  },
  deploymentsTab: {
    title: 'Deployments',
    category: 'Produção',
    description:
      'Deployments mostra o histórico de publicações do projeto em ambientes como produção, staging ou testes automáticos.',
    tip: 'Aqui você acompanha quando o projeto foi atualizado em servidores ou plataformas públicas.'
  },
  overviewTab: {
    title: 'Overview',
    category: 'Resumo',
    description:
      'Overview é a página principal do repositório que exibe informações resumidas, commits recentes, README e estatísticas do projeto.',
    tip: 'É a primeira coisa que alguém vê ao visitar seu repositório.'
  },
  repositoriesPanel: {
    title: 'Repositories',
    category: 'Navegação',
    description:
      'Repositories lista todos os repositórios de uma organização ou usuário, permitindo navegar entre projetos relacionados.',
    tip: 'Use para explorar outros projetos do mesmo autor ou organização.'
  }
};

const TRANSLATIONS: Record<TutorLanguage, Record<string, TutorEntry>> = {
  pt: BASE_TUTOR_CONTENT,
  en: {
    fork: { title: 'Fork', category: 'Repository', description: 'The Fork button creates a copy of the project in your account. It allows you to experiment safely without altering the original repository.', tip: 'Use Fork to test ideas without affecting the main project.' },
    watch: { title: 'Watch', category: 'Notifications', description: 'Watch tracks repository activity and alerts you to important events such as commits, issues, pull requests and comments.', tip: 'Useful for following active projects without visiting the page constantly.' },
    star: { title: 'Star', category: 'Favorites', description: 'The Star button acts as a bookmark for projects you like and shows support for the repository maintainer and community.', tip: 'Star works like a GitHub bookmark, not a sign of code approval.' },
    codeTab: { title: 'Code', category: 'Navigation', description: 'The Code tab shows the repository structure, files, folders, branches and the main project contents.', tip: 'This is the main place to browse the project files.' },
    issuesTab: { title: 'Issues', category: 'Collaboration', description: 'Issues are help requests, bug reports, suggestions and public discussions to improve the project before coding.', tip: 'If something is broken or can be improved, Issues is usually the right place to begin.' },
    pullRequestsTab: { title: 'Pull requests', category: 'Collaboration', description: 'Pull requests are proposed changes that are reviewed before being merged into the main project.', tip: 'A good pull request explains the problem, the solution and the reason behind the change.' },
    actionsTab: { title: 'Actions', category: 'Automation', description: 'Actions is GitHub automation for running tests, compiling projects, publishing artifacts and validating CI/CD pipelines.', tip: 'It is the equivalent of a CI/CD workflow inside GitHub.' },
    projectsTab: { title: 'Projects', category: 'Planning', description: 'Projects organizes work into visual boards, helping the team plan tasks, track progress and divide work into phases.', tip: 'A good way to visualize what still needs to be done.' },
    discussionsTab: { title: 'Discussions', category: 'Community', description: 'Discussions is a space for open conversation, ideas and knowledge sharing outside the issue flow.', tip: 'Perfect for clarifying concepts and asking broader community questions.' },
    insightsTab: { title: 'Insights', category: 'Analysis', description: 'Insights provides repository metrics, contributors, commits, activity history and growth trends.', tip: 'This helps you understand how the project evolves over time.' },
    settingsTab: { title: 'Settings', category: 'Administration', description: 'Settings centralizes repository configuration: permissions, branch protection, integrations and security options.', tip: 'This is the administrative area of the project and should be handled carefully.' },
    releasesTab: { title: 'Releases', category: 'Versions', description: 'Releases mark published versions of the project and help announce important changes or distributable builds.', tip: 'Use it to document stable versions and important milestones.' },
    branchesTab: { title: 'Branches', category: 'Workflow', description: 'Branches are parallel development lines that let you work on features or fixes without affecting the main branch.', tip: 'The main branch usually receives the final merged changes.' },
    tagsTab: { title: 'Tags', category: 'Versioning', description: 'Tags mark important points in the commit history, such as versions or release checkpoints.', tip: 'Tags usually represent important software milestones.' },
    commitsTab: { title: 'Commits', category: 'History', description: 'Commits record changes in the repository, each one representing an authored update with a message and timestamp.', tip: 'The commit history helps you understand how the project evolved.' },
    readmeTab: { title: 'README', category: 'Documentation', description: 'The README is the gateway to the project and usually explains purpose, setup, usage and contribution steps.', tip: 'Read the README before starting; it usually answers the basic questions.' },
    packageTab: { title: 'Packages', category: 'Distribution', description: 'Packages stores published artifacts and libraries such as npm, Docker, Maven or NuGet packages.', tip: 'It is where reusable software components are distributed.' },
    fileTable: { title: 'File structure', category: 'Exploration', description: 'The file tree helps you navigate the project and locate folders, modules and files quickly.', tip: 'A clear structure speeds up understanding of large repositories.' },
    aboutPanel: { title: 'About', category: 'Summary', description: 'The About panel offers a quick overview of the repository with description, topics and important links.', tip: 'It is a good place to understand the purpose of the project before diving into the code.' },
    topicsPanel: { title: 'Topics', category: 'Classification', description: 'Topics are keywords used to classify the repository and help people discover projects by theme or purpose.', tip: 'Topics make repositories easier to find in GitHub search.' },
    securityPanel: { title: 'Security', category: 'Security', description: 'Security centralizes alerts, dependency issues and protection practices for the project and its codebase.', tip: 'It is essential for safeguarding production code.' },
    licensePanel: { title: 'License', category: 'Legal', description: 'License shows the license under which the project is distributed, determining how you can use, modify and share the code.', tip: 'Always check the license before using a project in your work.' },
    wikiTab: { title: 'Wiki', category: 'Documentation', description: 'Wiki is a collaborative space for detailed project documentation, usage guides, tutorials and technical references.', tip: 'Wiki is useful for comprehensive manuals and documentation that does not fit in the README.' },
    deploymentsTab: { title: 'Deployments', category: 'Production', description: 'Deployments shows the project deployment history on environments like production, staging or automatic testing.', tip: 'Here you can track when the project was updated on servers or public platforms.' },
    overviewTab: { title: 'Overview', category: 'Summary', description: 'Overview is the main repository page displaying summary information, recent commits, README and project statistics.', tip: 'It is the first thing people see when visiting your repository.' },
    repositoriesPanel: { title: 'Repositories', category: 'Navigation', description: 'Repositories lists all repositories of an organization or user, allowing navigation between related projects.', tip: 'Use it to explore other projects from the same author or organization.' }
  },
  es: {
    fork: { title: 'Fork', category: 'Repositorio', description: 'El botón Fork crea una copia del proyecto en tu cuenta para que puedas experimentar sin afectar el repositorio original.', tip: 'Usa Fork para probar ideas sin alterar el proyecto principal.' },
    watch: { title: 'Watch', category: 'Notificaciones', description: 'Watch sigue la actividad del repositorio y te avisa sobre eventos importantes como commits, issues, pull requests y comentarios.', tip: 'Es útil para seguir proyectos activos sin visitar la página constantemente.' },
    star: { title: 'Star', category: 'Favoritos', description: 'El botón Star funciona como marcador de interés y muestra apoyo al mantenedor y a la comunidad del proyecto.', tip: 'Star funciona como favorito de GitHub, no como aprobación automática del código.' },
    codeTab: { title: 'Code', category: 'Navegación', description: 'La pestaña Code muestra la estructura del repositorio, sus carpetas, archivos y el contenido principal del proyecto.', tip: 'Es el punto de entrada principal para explorar el código.' },
    issuesTab: { title: 'Issues', category: 'Colaboración', description: 'Issues son solicitudes de ayuda, reportes de errores, sugerencias y conversaciones públicas sobre mejoras del proyecto.', tip: 'Si algo falla o puede mejorarse, Issues suele ser el sitio indicado para comenzar.' },
    pullRequestsTab: { title: 'Pull requests', category: 'Colaboración', description: 'Los pull requests son propuestas de cambio que se revisan antes de integrarse al proyecto principal.', tip: 'Un buen pull request explica el problema, la solución y la razón del cambio.' },
    actionsTab: { title: 'Actions', category: 'Automatización', description: 'Actions es la herramienta de automatización de GitHub para ejecutar pruebas, compilar proyectos y validar flujos CI/CD.', tip: 'Es el equivalente a un pipeline de automatización dentro de GitHub.' },
    projectsTab: { title: 'Projects', category: 'Planificación', description: 'Projects organiza el trabajo en tableros visuales para planear tareas, seguir el progreso y dividir el trabajo.', tip: 'Útil para visualizar lo que aún falta por hacer.' },
    discussionsTab: { title: 'Discussions', category: 'Comunidad', description: 'Discussions es un espacio para conversaciones abiertas, ideas e intercambio de conocimiento fuera del flujo de Issues.', tip: 'Es muy útil para aclarar dudas y recoger comentarios de la comunidad.' },
    insightsTab: { title: 'Insights', category: 'Análisis', description: 'Insights reúne métricas como contribuyentes, actividad, historial de commits y evolución del proyecto.', tip: 'Te ayuda a entender cómo crece el proyecto y quién participa.' },
    settingsTab: { title: 'Settings', category: 'Administración', description: 'Settings reúne la configuración del repositorio: permisos, ramas protegidas, integraciones y seguridad.', tip: 'Es el área administrativa del proyecto y debe manejarse con cuidado.' },
    releasesTab: { title: 'Releases', category: 'Versiones', description: 'Releases publica versiones del proyecto y ayuda a comunicar cambios importantes o builds distribuidos.', tip: 'Úsalo para documentar versiones estables y milestones importantes.' },
    branchesTab: { title: 'Branches', category: 'Flujo de trabajo', description: 'Branches son líneas paralelas de desarrollo que permiten trabajar en funciones o correcciones sin afectar la rama principal.', tip: 'La rama principal suele recibir los cambios finales integrados.' },
    tagsTab: { title: 'Tags', category: 'Versionado', description: 'Tags marcan puntos específicos en el historial, como versiones o hitos importantes del proyecto.', tip: 'Las tags suelen representar versiones importantes del software.' },
    commitsTab: { title: 'Commits', category: 'Historial', description: 'Los commits registran cambios concretos en el repositorio con mensajes y autores.', tip: 'El historial de commits ayuda a entender cómo evolucionó el proyecto.' },
    readmeTab: { title: 'README', category: 'Documentación', description: 'El README es la puerta de entrada del proyecto y normalmente explica propósito, instalación y contribución.', tip: 'Lee el README antes de comenzar; suele responder dudas básicas.' },
    packageTab: { title: 'Packages', category: 'Distribución', description: 'Packages guarda artefactos y librerías publicadas, como paquetes npm, Docker, Maven o NuGet.', tip: 'Es el espacio para distribuir componentes reutilizables.' },
    fileTable: { title: 'Estructura de archivos', category: 'Exploración', description: 'El árbol de archivos muestra la organización del proyecto y ayuda a localizar carpetas y módulos rápidamente.', tip: 'Una buena estructura acelera la comprensión de repositorios grandes.' },
    aboutPanel: { title: 'About', category: 'Resumen', description: 'El panel About muestra un resumen del repositorio con descripción, temas y enlaces importantes.', tip: 'Es un buen punto de partida para comprender la finalidad del proyecto.' },
    topicsPanel: { title: 'Topics', category: 'Clasificación', description: 'Topics son palabras clave que clasifican el repositorio y facilitan su descubrimiento por tema o propósito.', tip: 'Los Topics ayudan a encontrar proyectos dentro de GitHub.' },
    securityPanel: { title: 'Security', category: 'Seguridad', description: 'Security centraliza alertas, vulnerabilidades y prácticas de protección para el código y dependencias.', tip: 'Es esencial para proteger software en producción.' },
    licensePanel: { title: 'License', category: 'Legal', description: 'License muestra la licencia bajo la cual se distribuye el proyecto, determinando cómo puedes usar, modificar y compartir el código.', tip: 'Siempre verifica la licencia antes de usar un proyecto en tu trabajo.' },
    wikiTab: { title: 'Wiki', category: 'Documentación', description: 'Wiki es un espacio colaborativo para documentación detallada del proyecto, guías de uso, tutoriales y referencias técnicas.', tip: 'La Wiki es útil para manuales completos y documentación que no cabe en el README.' },
    deploymentsTab: { title: 'Deployments', category: 'Producción', description: 'Deployments muestra el historial de despliegues del proyecto en entornos como producción, staging o pruebas automáticas.', tip: 'Aquí puedes rastrear cuándo se actualizó el proyecto en servidores o plataformas públicas.' },
    overviewTab: { title: 'Overview', category: 'Resumen', description: 'Overview es la página principal del repositorio que muestra información resumida, commits recientes, README y estadísticas.', tip: 'Es lo primero que las personas ven al visitar tu repositorio.' },
    repositoriesPanel: { title: 'Repositories', category: 'Navegación', description: 'Repositories lista todos los repositorios de una organización o usuario, permitiendo explorar proyectos relacionados.', tip: 'Úsalo para explorar otros proyectos del mismo autor u organización.' }
  }
};

export function getTutorEntry(key: string, language: TutorLanguage = 'pt'): TutorEntry | undefined {
  const localeMap = TRANSLATIONS[language] ?? TRANSLATIONS.pt;
  return localeMap[key] ?? BASE_TUTOR_CONTENT[key];
}
