'use client'
import Grid from '@mui/material/Grid'
import ProtectedRoute from '@/components/ProtectedRoute'
import TopNavBar from '@/components/topNavBar'
import BottomNavBar from '@/components/bottomNavBar'


export default function Dashboard() {
  return (
    <div >
    <ProtectedRoute>
      <title>Dashboard | ElimSoul</title>
        <Grid container spacing={2}>
          <Grid size={13}>
            <TopNavBar />
          </Grid>
     
      </Grid>
    <BottomNavBar />
      </ProtectedRoute>
    </div>
  );
}
