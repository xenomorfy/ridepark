import { ScrollRevealInit }  from '../components/ScrollRevealInit'
import { SiteHeader }        from '../components/SiteHeader'
import { BackToTop }         from '../components/BackToTop'
import { Hero }              from '../components/Hero'
import { PreviewSection }    from '../components/sections/PreviewSection'
import { CatalogSection }    from '../components/sections/CatalogSection'
import { RentRulesSection }  from '../components/sections/RentRulesSection'
import { BookingSection }    from '../components/sections/BookingSection'
import { TracksSection }     from '../components/sections/TracksSection'
import { TrainingSection }   from '../components/sections/TrainingSection'
import { EventsSection }     from '../components/sections/EventsSection'
import { GallerySection }    from '../components/sections/GallerySection'
import { ReviewsSection }    from '../components/sections/ReviewsSection'
import { PricesSection }     from '../components/sections/PricesSection'
import { ContactsSection }   from '../components/sections/ContactsSection'
import { AboutSection }      from '../components/sections/AboutSection'

export default function Page() {
  return (
    <main>
      <ScrollRevealInit />
      <SiteHeader />
      <Hero />
      <PreviewSection />
      <CatalogSection />
      <RentRulesSection />
      <BookingSection />
      <TracksSection />
      <TrainingSection />
      <EventsSection />
      <GallerySection />
      <ReviewsSection />
      <PricesSection />
      <ContactsSection />
      <AboutSection />
      <BackToTop />
    </main>
  )
}
