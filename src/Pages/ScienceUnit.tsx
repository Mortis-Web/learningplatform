import UnitClasses from '../components/ScienceUnit/UnitClasses';
import UnitContent from '../components/ScienceUnit/UnitContent';
import UnitIntro from '../components/ScienceUnit/UnitIntro';

const ScienceUnit = () => {
  return (
    <>
      <UnitIntro />
      <section className="mx-auto my-[calc(var(--SecMt)*2)] grid min-h-[500px] max-w-[var(--container)] grid-cols-1 gap-8 md:grid-cols-3">
        <UnitClasses />
        <UnitContent />
      </section>
    </>
  );
};

export default ScienceUnit;
