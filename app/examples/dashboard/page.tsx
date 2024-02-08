import DashBottomLeft from "@/components/dashbottomleft"
import Dashtop from "@/components/dashtop"

function DashboardPage() {
  return (
    <div className='border-2 mt-5 py-3'>
      <Dashtop />
      <DashBottomLeft/>
    </div>
  )
}

export default DashboardPage
