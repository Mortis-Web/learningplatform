import UnitClasses from "../components/ScienceUnit/UnitClasses";
import UnitContent from "../components/ScienceUnit/UnitContent";
import UnitIntro from "../components/ScienceUnit/UnitIntro";

const ScienceUnit = () => {
  return (
   <>
   <UnitIntro/>
   <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[var(--container)] mx-auto min-h-[500px] my-[calc(var(--SecMt)*2)]">
    <UnitClasses/>
    <UnitContent/>
   </section>
   </>
  );
};

export default ScienceUnit;
