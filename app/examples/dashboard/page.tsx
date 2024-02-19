import DashBottom from "@/components/dashbottom"
import Dashtop from "@/components/dashtop"

function DashboardPage() {
  return (
    <div className='border-2 mt-5 py-3'>
      <Dashtop />
      <DashBottom/>
    </div>
  )
}

export default DashboardPage
