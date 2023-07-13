**Abstract:**

The online complaint board application is designed to provide a platform for college students to raise complaints and get them resolved by the administrators. The application supports multiple login methods, including college ID, mobile number, and Google social login. The system consists of three sub-admins categorized into technical, civil, and infrastructural departments, along with a main admin who has access to all departments.


**Key Features:**

**User Authentication:** The application supports login using college ID, mobile number, or Google social login. This ensures secure access to the system and personalized user experiences.

**Complaint Submission:** Students can raise complaints by providing details such as category, description, and any supporting documents. The complaint submission form allows students to specify the department related to their complaint.

**Department Categorization:** The system categorizes complaints into different departments, such as technical, civil, and infrastructural, based on the selected category. This allows administrators to handle complaints efficiently within their respective domains.

**Complaint Tracking:** Users can track the status of their complaints, including whether it is pending, under review, or resolved. This feature provides transparency and updates to students regarding the progress of their complaints.

**Admin Dashboard:** The administrators, including the main admin and sub-admins, have access to a dashboard where they can view and manage complaints assigned to their respective departments. The dashboard provides an overview of pending and resolved complaints.

**Complaint Resolution:** Admins can review and take necessary actions on the complaints assigned to them. They can provide responses, assign tasks to other admins, or mark complaints as resolved. This allows for efficient collaboration and resolution of issues.



**System Structure**

node_modules (directory): Contains the dependencies installed for the project.
public (directory):
  favicon.ico: Favicon file for the application.
  index.html: HTML template file for the application.
  logo.png: Logo image file for the application.
  logo192.png: Logo image file for progressive web apps.
  logo512.png: Logo image file for progressive web apps.
  manifest.json: Manifest file for progressive web apps.
  robots.txt: Robots.txt file for search engine crawlers.
src (directory):
  components (directory):
    Footer (directory):
      Footer.css: CSS file for the Footer component.
      Footer.js: Footer component.
    Home (directory):
      uploads (directory): Directory to store uploaded files for complaints.
      e2 sem2.png: Example uploaded image file.
      Admin.js: Admin component for the Home page.
      AdminComplaints.js: AdminComplaints component for the Home page.
      AdminHome.js: AdminHome component for the Home page.
      AllComplaints.js: AllComplaints component for the Home page.
      Complaints.js: Complaints component for the Home page.
      CivilAdminNav.js: CivilAdminNav component for the Home page.
      CivilComplaints.js: CivilComplaints component for the Home page.
      Complaints.css: CSS file for the Complaints component.
      Complaints.js: Complaints component for the Home page.
      EditForm.js: EditForm component for complaint editing.
      Home.css: CSS file for the Home component.
      Home.js: Home component for the landing page.
      InfraAdminNav.js: InfraAdminNav component for the Home page.
      InfraComplaints.js: InfraComplaints component for the Home page.
      MainAdminNav.js: MainAdminNav component for the Home page.
      TechAdminNav.js: TechAdminNav component for the Home page.
      TechComplaints.js: TechComplaints component for the Home page.
      Users.js: Users component for user management.
    LoginRegister (directory):
      Alert.js: Alert component for displaying error messages.
      LoginPage.js: LoginPage component for user login.
      LoginRegister.css: CSS file for the Login and Register components.
      MBLoginPage.js: MBLoginPage component for mobile number login.
      RegisterPage.js: RegisterPage component for user registration.
    Navbar (directory):
      logo.png: Logo image file for the Navbar.
      Navbar.css: CSS file for the Navbar component.
      Navbar.js: Navbar component.
      AdminLoginPage.js: AdminLoginPage component for admin login.
      ComplaintForm.js: ComplaintForm component for complaint submission.
      Context.js: Context file for managing global state.
      ForgotPage.js: ForgotPage component for password recovery.
      HomePage.js: HomePage component for the landing page.
      Login.js: Login component for user login.
      RegisterPage.js: RegisterPage component for user registration.
    shared (directory):
      baseUrl.js: Base URL file for API endpoints.
      App.css: CSS file for the App component.
      App.js: Main component handling routing and rendering.
      App.test.js: Test file for the App component.
      index.css: CSS file for the index.html file.
      index.js: Entry point of the application.
      logo.svg: Logo image file for the application.
      reportWebVitals.js: File for reporting web vitals.
      setupTests.js: File for setting up tests.
.gitignore: File specifying which files to ignore in version control.
package-lock.json: Auto-generated file specifying exact versions of installed dependencies.
package.json: File specifying project metadata and dependencies.
