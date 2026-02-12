import { Hero } from './components/site/Hero';
import { Header } from './components/site/Header';
import { GodSection } from './components/site/GodSection';
import { ContactSection } from './components/site/ContactSection';
import { Footer } from './components/site/Footer';
import { 
  krishnaItems, 
  ganeshaItems, 
  otherGodsItems,
  shivaItems,
  parvatiItems,
  handmadePortraitsItems,
  marbleStructuresItems
} from './data/placeholders';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <GodSection
          id="krishna"
          title="Lord Krishna"
          description="Exquisite marble sculptures capturing the divine essence of Lord Krishna"
          items={krishnaItems}
        />
        <GodSection
          id="ganesha"
          title="Lord Ganesha"
          description="Masterfully crafted marble art depicting the remover of obstacles"
          items={ganeshaItems}
        />
        <GodSection
          id="shiva"
          title="Lord Shiva"
          description="Powerful marble sculptures embodying the cosmic energy of Lord Shiva"
          items={shivaItems}
        />
        <GodSection
          id="parvati"
          title="Goddess Parvati"
          description="Graceful marble artworks celebrating the divine feminine energy of Parvati Ji"
          items={parvatiItems}
        />
        <GodSection
          id="handmade-portraits"
          title="Handmade Human Portraits"
          description="Exquisite handcrafted marble portraits capturing human beauty and emotion"
          items={handmadePortraitsItems}
        />
        <GodSection
          id="marble-structures"
          title="Marble Structures"
          description="Architectural marble masterpieces showcasing timeless craftsmanship and elegance"
          items={marbleStructuresItems}
        />
        <GodSection
          id="other-gods"
          title="Other Gods"
          description="A curated selection of marble sculptures honoring various deities"
          items={otherGodsItems}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
