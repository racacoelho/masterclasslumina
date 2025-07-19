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
    icon: <Download className="w-6 h-6 text-accent" />,
    title: "Planilha de Precificação",
    description: "Calcule o preço ideal para sua região"
  }, {
    icon: <Play className="w-6 h-6 text-accent" />,
    title: "Pack de Legendas",
    description: "Stories prontos para divulgar seus trabalhos"
  }, {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: "Guia de Fornecedores",
    description: "Lista exclusiva de fornecedores certificados"
  }];
  return <section className="lumina-section-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="lumina-heading-lg font-serif mb-6 lumina-text-black">
            Conteúdo do <span className="text-accent">Master Class</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            5 módulos práticos com mais de 3 horas de conteúdo exclusivo
          </p>
        </div>

        {/* Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-accent/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 lumina-bg-gold text-black rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {module.number}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{module.duration}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold lumina-text-black mb-3">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </div>)}
        </div>

        {/* Course Benefits */}
        <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold lumina-text-black mb-6 text-center">
            Além do curso, você recebe:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold lumina-text-black mb-2">Certificado Digital</h4>
              <p className="text-gray-600">Comprove sua especialização</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold lumina-text-black mb-2">Acesso Vitalício</h4>
              <p className="text-gray-600">Revise quando quiser</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold lumina-text-black mb-2">Suporte Exclusivo</h4>
              <p className="text-gray-600">Tire dúvidas direto conosco</p>
            </div>
          </div>
        </div>

      </div>
    </section>;
};