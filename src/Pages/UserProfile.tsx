import ProfileDataBox from '../components/UserProfile/ProfileDataBox';
import { useContextInput } from '../Hooks/InputContext';
const UserProfile = () => {
  const { handleSubmit, isEditable, handleReset } = useContextInput();

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mx-auto mt-[var(--SecMt)] mb-[calc(var(--SecMt)*2)] flex max-w-[var(--container)] flex-col gap-10 text-black"
    >
      <div className="flex max-h-fit w-full flex-wrap items-center justify-center gap-5 sm:justify-between">
        <h1 className="text-3xl font-semibold">الملف الشخصي</h1>
        {!isEditable ? (
          <button
            type="button"
            onClick={handleReset}
            className="min-w-3xs rounded-2xl bg-[var(--ButtonColor)] py-4 text-center text-lg font-semibold text-white"
          >
            تعديل الملف الشخصي
          </button>
        ) : (
          <button
            type="submit"
            className="block min-w-3xs rounded-2xl bg-[var(--ButtonColor)] py-4 text-center text-lg font-semibold text-white"
          >
            حفظ التغييرات
          </button>
        )}
      </div>
      <div className="w-full rounded-4xl bg-white px-4 py-10 shadow-[var(--Shadow)] md:px-14">
        <ProfileDataBox />
      </div>
    </form>
  );
};

export default UserProfile;
