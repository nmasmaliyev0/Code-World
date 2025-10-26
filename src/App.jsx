import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import CoursesSection from './components/CoursesSection/CoursesSection';
import TeachersSection from './components/TeachersSection/TeachersSection';
import ScholarshipsSection from './components/ScholarshipsSection/ScholarshipsSection';
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <TeachersSection />
        <ScholarshipsSection />
        <FeedbackSection />
      </main>
      <Footer />
    </>
  )
}

export default App;