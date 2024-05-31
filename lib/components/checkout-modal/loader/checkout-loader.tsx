import InstafansLogo from "../../../assets/if/logo";

export default function PayorcCheckoutLoader() {
  return (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <div data-testid="logo-loader" className="animate-pulse">
          <InstafansLogo />
        </div>
        <div className="my-4">
          <div data-testid="dots-loader" className="animate-bounce flex justify-center gap-3">
            <div className="h-2 w-2 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-2 w-2 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-2 w-2 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}