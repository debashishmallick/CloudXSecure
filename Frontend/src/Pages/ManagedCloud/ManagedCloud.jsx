import React from 'react'
import ManagedCloudBreadcrum from '../../Components/ManagedCloudBreadcrum/ManagedCloudBreadcrum'
import ManagedCloudSection from '../../Components/ManagedCloudSection/ManagedCloudSection'
import ManagedCloudApproach from '../../Components/ManagedCloudApproach/ManagedCloudApproach'
import ManagedCloudViewMore from '../../Components/ManagedCloudViewMore/ManagedCloudViewMore'
import ManagedCloudSubscribe from '../../Components/ManagedCloudSubscribe/ManagedCloudSubscribe'
import ManageCloudHero from '../../Components/ManageCloudHero/ManageCloudHero'
import ManageCloudDevlopment from '../../Components/ManageCloudDevlopment/ManageCloudDevlopment'
import ManageCloudeDevApproach from '../../Components/ManageCloudeDevApproach/ManageCloudeDevApproach'
import ManageCloudDevOverview from '../../Components/ManageCloudDevOverview/ManageCloudDevOverview'
import ManageCloudeTechstack from '../../Components/ManageCloudeTechstack/ManageCloudeTechstack'

const ManagedCloud = () => {
  return (
    <div>
      <ManagedCloudBreadcrum />
      <ManageCloudHero/>
      <ManageCloudDevlopment/>
      <ManageCloudeDevApproach/>
      <ManageCloudDevOverview/>
      <ManageCloudeTechstack/>
      
      <ManagedCloudSection />
      <ManagedCloudApproach />
      <ManagedCloudViewMore />
      <ManagedCloudSubscribe />
    </div>
  )
}

export default ManagedCloud
