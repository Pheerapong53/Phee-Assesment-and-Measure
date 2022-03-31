import PageSelectSchool from './pages/PageSelectSchool'
import PageLogin from './pages/PageLogin'
import PageRegisStu from './pages/PageRegisStu'
import PageTeaCher from './pages/PageRegisTeaCher'
import PageHistory from './pages/PageHistory'
import PageHistoyrS from './pages/PageHistoyrS'
import PageInsertScore from './pages/PageInsertScore.jsx'
import PageEstimate from './pages/PageEstimate.jsx'
import PageAttribute from './pages/PageAttribute.jsx'
import PageSummarize from './pages/PageSummarize'
import PageStudyResults from './pages/PageStudyResults.jsx'
import PageEducationInfo from './pages/PageEducationInfo.jsx'
import PageSubject from './pages/PageSubject.jsx'
import PagePersonalAttributes from './pages/PagePersonalAttributes.jsx'
import PageListTeacher from './pages/PageListTeacher.jsx'
import PageManage from './pages/PageManage.jsx'
import PageAddEducationInfo from './pages/PageAddEducationInfo'
import PageEditEducationInfo from './pages/PageEditEducationInfo'
import PageEditHistory from './pages/PageEditHistory'
import PagePrintHistoyrs from './pages/PagePrintHistoyrs'
import PageEditInsertScore from './pages/PageEditInsertScore'
import PageEditLeaveHistory from './pages/PageEditLeaveHistory'
import PageEditHistoryS from './pages/PageEditHistoryS'
import PageEditAttribute from './pages/PageEditAttribute'
import PageEditSummarize from './pages/PageEditSummarize'
import PageAddSubject from './pages/PageAddSubject'
import PageEditSubject from './pages/PageEditSubject'
import PageAddPersonalAttributes from './pages/PageAddPersonalAttributes'
import PageEditPersonalAttributes from './pages/PageEditPersonalAttributes'
import PagePrintStudyResults from './pages/PagePrintStudyResults.jsx'
import PagePrintStudyResultsOne from './pages/PagePrintStudyResultsOne'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'



function App() {
 
  
  return (
    
    
    <Router>
      <Routes >
        <Route path='/' element={<PageSelectSchool/>} />
        <Route path='/PageEducationInfo' element={<PageEducationInfo/>} />  
        <Route path='/login' element={<PageLogin/>} />
        <Route path='/RegisStu' element={<PageRegisStu/>} />
        <Route path='/RegisTeac' element={<PageTeaCher/>} />
        <Route path='/PageHistory' element={<PageHistory/>} />
        <Route path='/PageHistoyrS' element={<PageHistoyrS/>} />
        <Route path='/PageInsertScore' element={<PageInsertScore/>} />
        <Route path='/PageEstimate' element={<PageEstimate/>} />
        <Route path='/PageAttribute' element={<PageAttribute/>} />
        <Route path='/PageSummarize' element={<PageSummarize/>} />
        <Route path='/PageStudyResults' element={<PageStudyResults/>} />
        <Route path='/PageSubject' element={<PageSubject/>} />
        <Route path='/PagePersonalAttributes' element={<PagePersonalAttributes/>} />
        <Route path='/PageListTeacher' element={<PageListTeacher/>} />
        <Route path='/PageManage' element={<PageManage/>} />
        <Route path='/PageAddEducationInfo' element={<PageAddEducationInfo/>} />
        <Route path='/PageEditEducationInfo' element={<PageEditEducationInfo/>} />
        <Route path='/PageEditHistory' element={<PageEditHistory/>} />
        <Route path='/PagePrintHistoyrs' element={<PagePrintHistoyrs/>} />
        <Route path='/PageEditInsertScore' element={<PageEditInsertScore/>} />
        <Route path='/PageEditLeaveHistory' element={<PageEditLeaveHistory/>} />
        <Route path='/PageEditHistoryS' element={<PageEditHistoryS/>} />
        <Route path='/PageEditAttribute' element={<PageEditAttribute/>} />
        <Route path='/PageEditSummarize' element={<PageEditSummarize/>} />
        <Route path='/PageAddSubject' element={<PageAddSubject/>} />
        <Route path='/PageEditSubject' element={<PageEditSubject/>} />
        <Route path='/PageAddPersonalAttributes' element={<PageAddPersonalAttributes/>} />
        <Route path='/PageEditPersonalAttributes' element={<PageEditPersonalAttributes/>} />
        <Route path='/PagePrintStudyResults' element={<PagePrintStudyResults/>} />
        <Route path='/PagePrintStudyResultsOne' element={<PagePrintStudyResultsOne/>} />
      </Routes>
</Router>


  );
}

export default App;
