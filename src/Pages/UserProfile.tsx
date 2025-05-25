import ProfileDataBox from "../components/UserProfile/ProfileDataBox"

const UserProfile = () => {
  return (
    <section className="mt-[var(--SecMt)] max-w-[var(--container)] mx-auto text-black flex flex-col gap-10">
      <div className="flex w-full justify-center gap-5 flex-wrap sm:justify-between items-center max-h-fit ">
        <h1 className="font-semibold text-3xl">الملف الشخصي</h1>
        <button className="block text-lg font-semibold text-white bg-[var(--ButtonColor)] py-4 min-w-3xs text-center rounded-2xl">تعديل الملف الشخصي</button>
      </div>
      <div className="w-full rounded-4xl shadow-[var(--Shadow)] py-10 px-5 md:px-14 bg-white mb-[var(--SecMt)]">
        <ProfileDataBox/>


      </div>

    </section>
  )
}

export default UserProfile