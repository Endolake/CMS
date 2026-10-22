import type {StructureResolver} from 'sanity/structure'
const singleton=(S:any,title:string,id:string)=>S.listItem().title(title).id(id).child(S.editor().id(id).schemaType(id).documentId(id))
export const structure: StructureResolver=(S)=>S.list().title('Website Content').items([
  singleton(S,'Practice & Site Settings','practiceSettings'), singleton(S,'Homepage','homepage'), singleton(S,'About Page','aboutPage'), singleton(S,'Services Page','servicesPage'),
  S.documentTypeListItem('doctor').title('Doctors'), S.documentTypeListItem('service').title('Services'), singleton(S,'For Patients','patientsPage'), singleton(S,'For Referring Doctors','referringDoctorsPage'),
  singleton(S,'Contact Page','contactPage'), singleton(S,'Appointment Page','appointmentPage'), singleton(S,'Office & Photos','office')
])
