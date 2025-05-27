import React, { useState } from 'react';
import { Truck, Wrench, Home, Package, Phone, Mail, MapPin, Menu, X, ArrowRight, CheckCircle, Star } from 'lucide-react';

// Simple Router Implementation
const Router = ({ children }) => {
  return <div>{children}</div>;
};

const Route = ({ path, component: Component, currentPath }) => {
  return currentPath === path ? <Component /> : null;
};

const ZubayraevPartner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => {
    setCurrentPath(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Utleie",
      description: "Vi tilbyr utleie av utstyr, tilhengere og lokaler for både private og bedriftskunder.",
      path: "/utleie"
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Vedlikehold",
      description: "Hagearbeid-mobilt verksted-henting og kasting av avfall og service av tilhengere.",
      path: "/vedlikehold"
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Transport",
      description: "Pålitelig transport- og logistikktjenester for alle typer gods og materiell.",
      path: "/transport"
    },
    {
      icon: <Package className="w-12 h-12 text-blue-600" />,
      title: "Distribusjon",
      description: "Effektiv distribusjon og levering av varer til kunder over hele landet.",
      path: "/distribusjon"
    }
  ];

  // Navigation Component
  const Navigation = () => (
    <nav className="nav-fixed">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <button 
              onClick={() => navigate('/')}
              className="nav-logo button"
            >
              Zubayraev Partner
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <div className="nav-links">
              <button onClick={() => navigate('/')} className="nav-link">Hjem</button>
              <div className="nav-dropdown">
                <button className="nav-link">Tjenester</button>
                <div className="nav-dropdown-content">
                  <div>
                    <button onClick={() => navigate('/utleie')} className="nav-dropdown-link">Utleie</button>
                    <button onClick={() => navigate('/vedlikehold')} className="nav-dropdown-link">Vedlikehold</button>
                    <button onClick={() => navigate('/transport')} className="nav-dropdown-link">Transport</button>
                    <button onClick={() => navigate('/distribusjon')} className="nav-dropdown-link">Distribusjon</button>
                  </div>
                </div>
              </div>
              <button onClick={() => navigate('/om-oss')} className="nav-link">Om Oss</button>
              <button onClick={() => navigate('/kontakt')} className="nav-link">Kontakt</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="nav-mobile-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-mobile-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-links">
            <button onClick={() => navigate('/')} className="nav-mobile-link">Hjem</button>
            <button onClick={() => navigate('/utleie')} className="nav-mobile-link">Utleie</button>
            <button onClick={() => navigate('/vedlikehold')} className="nav-mobile-link">Vedlikehold</button>
            <button onClick={() => navigate('/transport')} className="nav-mobile-link">Transport</button>
            <button onClick={() => navigate('/distribusjon')} className="nav-mobile-link">Distribusjon</button>
            <button onClick={() => navigate('/om-oss')} className="nav-mobile-link">Om Oss</button>
            <button onClick={() => navigate('/kontakt')} className="nav-mobile-link">Kontakt</button>
          </div>
        </div>
      )}
    </nav>
  );

  // Home Page Component
  const HomePage = () => (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Zubayraev Partner
            </h1>
            <p className="hero-subtitle">
              Din pålitelige partner for multiservice-løsninger
            </p>
            <p className="hero-description">
              Vi tilbyr profesjonelle tjenester innen utleie, vedlikehold, transport og distribusjon. 
              Med erfaring og dedikasjon leverer vi kvalitetsløsninger tilpasset dine behov.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => navigate('/utleie')}
                className="btn-primary"
              >
                Se våre tjenester
              </button>
              <button 
                onClick={() => navigate('/kontakt')}
                className="btn-secondary"
              >
                Kontakt oss
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Våre Tjenester</h2>
            <p className="section-description">
              Vi tilbyr et bredt spekter av tjenester for å dekke alle dine multiservice-behov
            </p>
          </div>

          <div className="grid-4">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <button 
                  onClick={() => navigate(service.path)}
                  className="service-card-link"
                >
                  Les mer <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // Service Page Template
  const ServicePage = ({ title, icon, description, features, images, benefits }) => (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="section-container">
          <div className="hero-content">
            <div className="service-hero-icon">
              {icon}
            </div>
            <h1 className="service-hero-title">{title}</h1>
            <p className="service-hero-description">{description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="section-container">
          <div className="features-grid">
            <div>
              <h2 className="features-title">Våre {title.toLowerCase()}-tjenester</h2>
              <div className="features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <CheckCircle className="feature-icon" />
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="images-grid">
              {images.map((image, index) => (
                <div key={index} className="image-placeholder">
                  <span className="image-placeholder-text">{image}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="section-container">
          <h2 className="benefits-title">Fordeler med våre tjenester</h2>
          <div className="grid-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-header">
                  <Star className="benefit-icon" />
                  <h3 className="benefit-title">{benefit.title}</h3>
                </div>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Klar for å komme i gang?</h2>
            <p className="cta-description">
              Kontakt oss i dag for et uforpliktende tilbud på våre {title.toLowerCase()}-tjenester
            </p>
            <button 
              onClick={() => navigate('/kontakt')}
              className="cta-button"
            >
              Kontakt oss nå
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  // Individual Service Pages
  const UtleiePage = () => (
    <ServicePage
      title="Utleie"
      icon={<Home className="w-16 h-16 text-blue-600" />}
      description="Utleie av utstyr, maskiner og lokaler for både private og bedriftskunder med fleksible avtaler og konkurransedyktige priser."
      features={[
        "Bygge- og anleggsmaskiner",
        "Verkstøy og håndverktøy",
        "Kontormateriell og møbler",
        "Lokaler og lagerplass",
        "Transportutstyr",
        "Fleksible leieperioder",
        "24/7 support og service",
        "Levering og henting inkludert"
      ]}
      images={[
        "Gravemaskiner og bulldosere",
        "Stilaser og byggekraner",
        "Kontormøbler og utstyr",
        "Lagerlokaler og kontor"
      ]}
      benefits={[
        {
          title: "Kostnadseffektivt",
          description: "Spar penger ved å leie i stedet for å kjøpe dyrt utstyr du bare trenger midlertidig."
        },
        {
          title: "Fleksibilitet",
          description: "Tilpass leieperioden etter dine behov - fra noen timer til flere måneder."
        },
        {
          title: "Service inkludert",
          description: "All vedlikehold og support er inkludert i leieprisen."
        }
      ]}
    />
  );

  const VedlikeholdPage = () => (
    <ServicePage
      title="Vedlikehold"
      icon={<Wrench className="w-16 h-16 text-blue-600" />}
      description="Profesjonell vedlikehold og reparasjon av maskiner, utstyr og bygninger for å sikre optimal drift og lang levetid."
      features={[
        "Forebyggende vedlikehold",
        "Akutt reparasjonstjeneste",
        "Maskinvedlikehold og service",
        "Bygningsvedlikehold",
        "Elektriske installasjoner",
        "VVS-tjenester",
        "Kvalitetssikring og rapportering",
        "Planlagt vedlikeholdsprogram"
      ]}
      images={[
        "Maskinreparasjon i verksted",
        "Bygningsvedlikehold utendørs",
        "Elektriske installasjoner",
        "VVS-arbeider og rørlegging"
      ]}
      benefits={[
        {
          title: "Reduserte driftskostnader",
          description: "Forebyggende vedlikehold reduserer risikoen for kostbare havarireparasjoner."
        },
        {
          title: "Økt oppetid",
          description: "Regelmessig service sikrer at utstyret ditt fungerer optimalt når du trenger det."
        },
        {
          title: "Faglig ekspertise",
          description: "Våre erfarne teknikere har kunnskap om alle typer utstyr og systemer."
        }
      ]}
    />
  );

  const TransportPage = () => (
    <ServicePage
      title="Transport"
      icon={<Truck className="w-16 h-16 text-blue-600" />}
      description="Pålitelig transport- og logistikktjenester for alle typer gods og materiell med sikker og effektiv levering."
      features={[
        "Varetransport alle størrelser",
        "Tungtransport og spesialkjøretøy",
        "Flyttetjenester for bedrifter",
        "Avfallshåndtering og -transport",
        "Logistikkplanlegging",
        "GPS-sporing av sendinger",
        "Fleksible leveringstider",
        "Forsikret transport"
      ]}
      images={[
        "Lastebiler og transportkjøretøy",
        "Kran og løfteutstyr",
        "Containerfrakt og lasting",
        "Spesialtransport av maskiner"
      ]}
      benefits={[
        {
          title: "Pålitelig levering",
          description: "Vi holder våre avtaler og leverer alltid til rett tid på rett sted."
        },
        {
          title: "Sikker transport",
          description: "Profesjonell håndtering og sikring av gods for trygg transport."
        },
        {
          title: "Fleksible løsninger",
          description: "Tilpassede transportløsninger for alle typer gods og leveringsbehov."
        }
      ]}
    />
  );

  const DistribusjonPage = () => (
    <ServicePage
      title="Distribusjon"
      icon={<Package className="w-16 h-16 text-blue-600" />}
      description="Effektiv distribusjon og levering av varer til kunder over hele landet med moderne logistikkløsninger."
      features={[
        "Lagerhåndtering og lagring",
        "Pakkeprosess og forsendelse",
        "Siste-mil levering",
        "Returhåndtering",
        "Lagerstyringssystemer",
        "Online sporingsmuligheter",
        "Fleksible leveringsalternativer",
        "Kvalitetskontroll"
      ]}
      images={[
        "Moderne lagerområder",
        "Pakking og forsendelse",
        "Leveringsbiler i trafikk",
        "Logistikksenter og sortering"
      ]}
      benefits={[
        {
          title: "Effektiv logistikk",
          description: "Optimaliserte distribusjonsprosesser som reduserer kostnader og leveringstid."
        },
        {
          title: "Skalerbare løsninger",
          description: "Våre systemer vokser med din bedrift og håndterer økende volum."
        },
        {
          title: "Full sporbarhet",
          description: "Komplett oversikt over alle sendinger fra lager til kunde."
        }
      ]}
    />
  );

  // Contact Page
  const ContactPage = () => (
    <div className="pt-16">
      <section className="section bg-white">
        <div className="section-container">
          <div className="section-header">
            <h1 className="section-title">Kontakt Oss</h1>
            <p className="section-description">
              Ta kontakt med oss i dag for å diskutere hvordan vi kan hjelpe deg
            </p>
          </div>

          <div className="contact-cards">
            <div className="contact-card">
              <Phone className="contact-icon" />
              <h3 className="contact-card-title">Telefon</h3>
              <p className="contact-card-description">Ring oss for rask service</p>
              <a href="tel:+4712345678" className="contact-link">
                +47 123 45 678
              </a>
            </div>

            <div className="contact-card">
              <Mail className="contact-icon" />
              <h3 className="contact-card-title">E-post</h3>
              <p className="contact-card-description">Send oss en melding</p>
              <a href="mailto:kontakt@zubayraevpartner.no" className="contact-link">
                kontakt@zubayraevpartner.no
              </a>
            </div>

            <div className="contact-card">
              <MapPin className="contact-icon" />
              <h3 className="contact-card-title">Adresse</h3>
              <p className="contact-card-description">Besøk vårt kontor</p>
              <p className="text-gray-800">
                Eksempelgate 123<br />
                0123 Oslo
              </p>
            </div>
          </div>

          <div className="contact-cta">
            <h2 className="contact-cta-title">Klar for et samarbeid?</h2>
            <p className="contact-cta-description">
              Vi ser frem til å høre fra deg og diskutere hvordan Zubayraev Partner kan være din ideelle samarbeidspartner.
            </p>
            <a href="tel:+4712345678" className="btn-primary">
              Ring oss nå
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="pt-16">
      <section className="section bg-white">
        <div className="section-container">
          <div className="about-grid">
            <div>
              <h1 className="about-title">Om Zubayraev Partner</h1>
              <p className="about-text">
                Zubayraev Partner er en etablert multiservice-bedrift som har bygget sitt rykte på pålitelighet, 
                kvalitet og kundeservice. Vi forstår at våre kunders behov er unike, og derfor tilbyr vi 
                skreddersydde løsninger innen flere tjenesteområder.
              </p>
              <p className="about-text">
                Vårt team av erfarne fagfolk arbeider dedikert for å levere tjenester av høyeste kvalitet, 
                enten det gjelder utleie av utstyr, vedlikehold av anlegg, transport av gods eller 
                distribusjon av varer.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-number">100+</div>
                  <div className="about-stat-label">Fornøyde kunder</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number">24/7</div>
                  <div className="about-stat-label">Tilgjengelighet</div>
                </div>
              </div>
            </div>
            
            <div className="about-features">
              <h3 className="about-features-title">Hvorfor velge oss?</h3>
              <div className="about-features-list">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">Erfarne fagfolk med lang bransjekunnskap</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">Konkurransedyktige priser og fleksible løsninger</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">Pålitelig service og rask respons</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span className="feature-text">Kvalitetssikring på alle tjenester</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Footer Component
  const Footer = () => (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div>
            <h3 className="footer-brand-title">Zubayraev Partner</h3>
            <p className="footer-brand-description">
              Din pålitelige partner for multiservice-løsninger innen utleie, vedlikehold, transport og distribusjon.
            </p>
          </div>
          
          <div>
            <h4 className="footer-section-title">Tjenester</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigate('/utleie')} className="footer-link">Utleie</button></li>
              <li><button onClick={() => navigate('/vedlikehold')} className="footer-link">Vedlikehold</button></li>
              <li><button onClick={() => navigate('/transport')} className="footer-link">Transport</button></li>
              <li><button onClick={() => navigate('/distribusjon')} className="footer-link">Distribusjon</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-section-title">Kontakt</h4>
            <div className="footer-contact">
              <p>Telefon: 40857630</p>
              <p>E-post: kontakt@zubayraevpartner.no</p>
              <p>Adresse: Bakkavegen 386, 3520 Jevnaker</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Zubayraev Partner. Alle rettigheter forbeholdt.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Router>
        <Route path="/" component={HomePage} currentPath={currentPath} />
        <Route path="/utleie" component={UtleiePage} currentPath={currentPath} />
        <Route path="/vedlikehold" component={VedlikeholdPage} currentPath={currentPath} />
        <Route path="/transport" component={TransportPage} currentPath={currentPath} />
        <Route path="/distribusjon" component={DistribusjonPage} currentPath={currentPath} />
        <Route path="/om-oss" component={AboutPage} currentPath={currentPath} />
        <Route path="/kontakt" component={ContactPage} currentPath={currentPath} />
      </Router>
      
      <Footer />
    </div>
  );
};

export default ZubayraevPartner;