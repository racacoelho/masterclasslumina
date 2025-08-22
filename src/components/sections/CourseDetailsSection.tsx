import { Play, Award, Clock, Users, Download } from 'lucide-react';
export const CourseDetailsSection = () => {
  const modules = [{
    number: "01",
    title: "Fundamentos da Técnica Lumina",
    description: "Teoria completa sobre a tecnologia de fita ultrafina",
    duration: "45 min"
  }, {
    number: "02",
    title: "Preparação e Análise Capilar",
    description: "Como escolher o tom perfeito e preparar o cabelo",
    duration: "35 min"
  }, {
    number: "03",
    title: "Aplicação Passo a Passo",
    description: "Técnica completa de aplicação em alta definição",
    duration: "60 min"
  }, {
    number: "04",
    title: "Finalização e Manutenção",
    description: "Orientações de cuidados e durabilidade",
    duration: "40 min"
  }, {
    number: "05",
    title: "Estratégias de Venda",
    description: "Como posicionar e precificar o serviço premium",
    duration: "30 min"
  }];
  const bonuses = [{
    icon: <Download className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />,
    title: "Planilha de Precificação",
    description: "Calcule o preço ideal para sua região"
  }, {
    icon: <Play className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />,
    title: "Pack de Legendas",
    description: "Stories prontos para divulgar seus trabalhos"
  }, {
    icon: <Users className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />,
    title: "Guia de Fornecedores",
    description: "Lista exclusiva de fornecedores certificados"
  }];
  return <section className="lumina-section-white">
      <div className="lumina-container-desktop">
        <div className="text-center lumina-desktop-spacing-lg">
          <h2 className="lumina-heading-lg font-serif lumina-desktop-spacing lumina-text-black">
            Conteúdo do <span className="text-accent">Master Class</span>
          </h2>
          <p className="lumina-text-xl text-gray-700 max-w-4xl mx-auto">
            5 módulos práticos com mais de 3 horas de conteúdo exclusivo
          </p>
        </div>

        {/* Modules */}
        <div className="lumina-desktop-grid-3 lumina-desktop-spacing-lg">
          {modules.map((module, index) => <div key={index} className="bg-white p-6 lg:p-8 xl:p-10 rounded-xl shadow-lg border border-accent/10 lumina-transition hover:shadow-xl">
              <div className="flex items-center lumina-desktop-spacing">
                <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 lumina-bg-gold text-black rounded-full flex items-center justify-center font-bold text-lg lg:text-xl mr-4">
                  {module.number}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 mr-1" />
                  <span className="text-sm lg:text-base">{module.duration}</span>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold lumina-text-black lumina-desktop-spacing">{module.title}</h3>
              <p className="text-gray-600 text-lg lg:text-xl">{module.description}</p>
            </div>)}
        </div>

        {/* Course Benefits */}
        <div className="bg-accent/10 border border-accent/20 p-6 lg:p-8 xl:p-12 rounded-lg">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold lumina-text-black lumina-desktop-spacing text-center">
            Além do curso, você recebe:
          </h3>
          <div className="lumina-desktop-grid-3 lumina-desktop-spacing">
            <div className="text-center">
              <Award className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-accent mx-auto lumina-desktop-spacing" />
              <h4 className="font-bold text-lg lg:text-xl xl:text-2xl lumina-text-black lumina-desktop-spacing">Certificado Digital</h4>
              <p className="text-gray-600 text-lg lg:text-xl">Comprove sua especialização</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-accent mx-auto lumina-desktop-spacing" />
              <h4 className="font-bold text-lg lg:text-xl xl:text-2xl lumina-text-black lumina-desktop-spacing">Acesso Vitalício</h4>
              <p className="text-gray-600 text-lg lg:text-xl">Revise quando quiser</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-accent mx-auto lumina-desktop-spacing" />
              <h4 className="font-bold text-lg lg:text-xl xl:text-2xl lumina-text-black lumina-desktop-spacing">Suporte Exclusivo</h4>
              <p className="text-gray-600 text-lg lg:text-xl">Tire dúvidas direto conosco</p>
            </div>
          </div>
        </div>

      </div>
    </section>;
};