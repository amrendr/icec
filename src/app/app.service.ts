import { Injectable } from '@angular/core';


@Injectable()
export class AppService {
    constructor() { }

    getMembers(type: string, year: number): Promise<Members> {
        let item: MemberList;
        if (year)
            item = membersData.find(member => member.year === year);
        else
            item = membersData.sort((a, b) => { return a.year - b.year; })[0];
        if (!item)
            item = { year: null, boardMembers: [], executives: [], regularMembers: [] };
        let members: Members = { year: item.year, title: '', memberList: [] };

        switch (type) {
            case 'EM':
                members.title = 'Executive Members';
                members.memberList = item.executives;
                break;
            case 'BM':
                members.title = 'Board Members';
                members.memberList = item.boardMembers;
                break;
            case 'RM':
                members.title = 'Regular Members';
                members.memberList = item.regularMembers;
                break;
            case 'OM':
                members.title = 'Donor/Founding Members';
                members.memberList = allMemberList;
                break;
            default:
                members.title = 'Executive Members';
                members.memberList = item.executives;
                break;
        }
        return Promise.resolve(members);
    }

}

const membersData: MemberList[] = [
    {
        year: 2015,
        executives: [
            { membershipType: 'Donor Member', membershipTerm: '2014-2016', lastname: 'Bhosale', fullname: 'Ravi Bhosale, MBA', email: 'bhosale.ravi@gmail.com', contact: '352-275-2276', title: 'President' },
            { membershipType: 'Donor Member', membershipTerm: '2014-2016', lastname: 'Thanawala', fullname: 'Rizwana Thanawala, M.D.', email: 'kbrrz@aol.com', contact: '386-365-5313', title: 'Vice-President' },
            { membershipType: 'Donor Member', membershipTerm: '2015-2017', lastname: 'Srivastava', fullname: 'Ramakant Srivastava, Ph.D.', email: 'rsrivastava1943@gmail.com', contact: '352-466-3668', title: 'Secretary' },
            { membershipType: 'Donor Member', membershipTerm: '2015-2017', lastname: 'Qaiyumi', fullname: 'Shaheda Qaiyumi, M.D.', email: 'shahedaq@gmail.com', contact: '352-378-7112', title: 'Treasurer' }
        ],
        boardMembers: [
            { membershipType: 'Donor Member', membershipTerm: '2014-2016', lastname: 'Bhosale', fullname: 'Ravi Bhosale, MBA', email: 'bhosale.ravi@gmail.com', contact: '352-275-2276', title: 'President' },
            { membershipType: 'Donor Member', membershipTerm: '2014-2016', lastname: 'Thanawala', fullname: 'Rizwana Thanawala, M.D.', email: 'kbrrz@aol.com', contact: '386-365-5313', title: 'Vice-President' },
            { membershipType: 'Donor Member', membershipTerm: '2015-2017', lastname: 'Srivastava', fullname: 'Ramakant Srivastava, Ph.D.', email: 'rsrivastava1943@gmail.com', contact: '352-466-3668', title: 'Secretary' },
            { membershipType: 'Donor Member', membershipTerm: '2015-2017', lastname: 'Qaiyumi', fullname: 'Shaheda Qaiyumi, M.D.', email: 'shahedaq@gmail.com', contact: '352-378-7112', title: 'Treasurer' },
            { membershipType: 'Donor Member', membershipTerm: '2014-2016', lastname: 'Arora', fullname: 'Shiwani Arora, M.D.', email: 'shiwani.arora@clinicalpet.com', contact: '352-332-9366' },
            { membershipType: 'Donor Member', membershipTerm: '2015-2017', lastname: 'Garg', fullname: 'Lal Garg, Ph.D.', email: 'lcgarg@ufl.edu', contact: '352-378-4623' },
            { membershipType: 'Donor Member', membershipTerm: '2015-2017', lastname: 'Moudgil', fullname: 'Brij Moudgil, Ph.D.', email: 'bmoudgil@gmail.com', contact: '352-372-3137' },
            { membershipType: 'Donor Member', membershipTerm: '2015-2017', lastname: 'Sankar', fullname: 'Bhavani Sankar, Ph.D.', email: 'bvsankar@gmail.com', contact: '352-374-4382' },
            { membershipType: 'Donor Member', membershipTerm: '2015-2017', lastname: 'Sitharam', fullname: 'Meera Sitharam, Ph.D.', email: 'sitharam@cise.ufl.edu', contact: '352-336-5926' },
            { membershipType: 'Alternate Donor Member', membershipTerm: ' ', lastname: 'Ganesh', fullname: 'Thangavelu Ganesh, M.D.', email: ' ', contact: ' ' },
            { membershipType: 'Alternate Donor Member', membershipTerm: '2015-2017', lastname: 'Thomas', fullname: 'Anil Thomas, M.D.', email: 'anilthomasv@hotmail.com', contact: '352-262-7119' },
            { membershipType: 'Founding Member', membershipTerm: '2014-2016', lastname: 'Alladi', fullname: 'Krishna Alladi, Ph.D.', email: 'alladik@ufl.edu', contact: '352-372-4545' },
            { membershipType: 'Founding Member', membershipTerm: '2014-2016', lastname: 'Bhardwaj', fullname: 'Bhavna Bhardwaj, M.D.', email: 'bhard1624@yahoo.com', contact: '352-328-9641' },
            { membershipType: 'Founding Member', membershipTerm: '2014-2016', lastname: 'Mehta', fullname: 'Chetana Mehta', email: 'chetanamehta1230@gmail.com', contact: '352-373-1230' },
            { membershipType: 'Founding Member', membershipTerm: '2014-2016 ', lastname: 'Singh', fullname: 'Ajay Singh, Atty. & CPA', email: 'ajay@akslawfirm.com', contact: '352-871-1514' },
            { membershipType: 'Regular Member', membershipTerm: '2014-2016', lastname: 'Gokhale', fullname: 'Kim Gokhale', email: 'kimgokhale@gmail.com', contact: '352-283-6914' },
            { membershipType: 'Regular Member', membershipTerm: '2014-2016', lastname: 'Lalwani', fullname: 'Lalit Lalwani', email: 'l_lals@yahoo.com', contact: '352-871-8205' },
            { membershipType: 'Alternate Regular Member', membershipTerm: '2014-2016', lastname: 'Jain', fullname: 'Pradeep Jain, Ph.D.', email: 'prepjain@gmail.com', contact: '352-283-4742' },
            { membershipType: 'Alternate Regular Member', membershipTerm: '2014-2016', lastname: 'Sriram', fullname: 'Neeta Sriram', email: 'neeta_sriram@yahoo.com', contact: '352-336-1434' },
            { membershipType: 'Advisory Board Member', membershipTerm: '2015-2017', lastname: 'Ganesh', fullname: 'Lalitha Ganesh, M.D.', email: 'lalitha_ganesh@hotmail.com', contact: '352-377-2844' },
            { membershipType: 'Advisory Board Member', membershipTerm: '2015-2017', lastname: 'Nagda', fullname: 'Rasik Nagda, M.D.', email: 'babuji@aol.com', contact: '352-854-1776' },
            { membershipType: 'Advisory Board Member', membershipTerm: '2015-2017', lastname: 'Narayanan', fullname: 'Vasudha Narayanan, Ph.D.', email: 'vasu@ufl.edu', contact: '352-335-9812' },
            { membershipType: 'Advisory Board Member', membershipTerm: '2015-2017', lastname: 'Sahni', fullname: 'Neeta Sahni', email: 'sahni.neeta@gmail.com', contact: '352-331-0952' },
            { membershipType: 'Advisory Board Member', membershipTerm: '2015-2017 ', lastname: 'Shah', fullname: 'Dinesh Shah, Ph.D.', email: 'dineshoshah@yahoo.com', contact: '352-378-3242' }
        ],
        regularMembers: [
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Agarwal', fullname: 'Hema & Basant Agarwal' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Balachandar', fullname: 'Uma Krishnan & Dr. S. Balachandar' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Banerjee', fullname: 'Jyoti Parmar & Dr. Arunava Banerjee' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Bhaskar', fullname: 'Vanaja & Subhash Bhaskar' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Bhattacharyya', fullname: 'Anu & Dr. Indraneel Bhattacharyya' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 16-Aug-2015', lastname: 'Bhusari', fullname: 'Swapna & Sanjyot Bhusari' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Bidari', fullname: 'Drs. Divya Goindwani & Sharatchandra Bidari' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Chauhan', fullname: 'Drs. Gagneet & Shailendra Chauhan' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 13-Mar-2015', lastname: 'Chourey', fullname: 'Mrs. & Dr. Prem Chourey' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Desai', fullname: 'Vatsala & Jagat Desai' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Gandhi', fullname: 'Smita & Gimesh Gandhi' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 17-Aug-2015', lastname: 'Gokhale', fullname: 'Kim & Salil Gokhale' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 31-Oct-2015', lastname: 'Gupta', fullname: 'Pramila & Pradeep Gupta' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Gupte', fullname: 'Asmita & Anand Gupte, MD' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Guske', fullname: 'Priti Joshi & Mike Guske' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Hingonani', fullname: 'Ashoo & Sanjeev Hingonani' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Jain', fullname: 'Aruna & Dr. Pradeep Jain' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Katkar', fullname: 'Drs. Rujuta & Amol Katkar' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Kumar', fullname: 'Uma Chaudhary & Dr. Ashok Kumar' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Kumar', fullname: 'Vasudha Singh & Dr. Mrinal Kumar' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Lalwani', fullname: 'Mr. Lalit & Mrs. Heena Lalwani' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Ogram', fullname: 'Sushma & Andrew Ogram' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Patel', fullname: 'Jagruti & Mehul Patel' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Patel', fullname: 'Hema & Nilesh Patel' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Patel', fullname: 'Varsha & Vince Patel' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 08-Mar-2015', lastname: 'Pohani', fullname: 'Mr. Sunny & Dr. Neeta Pohani' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Pothu', fullname: 'Sridevi Kulla & Kiran Pothu' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 20-Oct-2015', lastname: 'Rajderkar', fullname: 'Dr. Dhanashree & Abhijit Rajderkar' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Rao', fullname: 'Anita Rao' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership has expired', lastname: 'Satyaprakash', fullname: 'Vimala & K.L. Satyaprakash' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Sharma', fullname: 'Bimla & Nand Sharma' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Sharma', fullname: 'Suparna & Parvesh Sharma' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 31-Oct-2015', lastname: 'Sheikh', fullname: 'Saveela Asad & Awais Sheikh' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Shukla', fullname: 'Aparna & Ashutosh Shukla' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Sivaprasad', fullname: 'Deepa & Kalipatnapu Sivaprasad' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Sodhi', fullname: 'Kuldip Sodhi' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 10-Nov-2015', lastname: 'Swamy', fullname: 'Kalpana & Dr. Jagadish Swamy' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Vedam', fullname: 'Mrs. Vinata Vedam' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 28-Jul-2015', lastname: 'Vidyasagar', fullname: 'Meera Nair & Sadasivan Vidyasagar' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Vyas', fullname: 'Priyanka Goswami & Himesh Vyas' },
            { membershipType: 'Regular Member', membershipTerm: 'Membership expires 15-Aug-2015', lastname: 'Wagh', fullname: 'Drs. Sujata & Mihir Wagh' }
        ]
    }
];
const allMemberList: Member[] = [
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Agrawal', fullname: 'Dr. & Mrs. Shio Agrawal' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Anthony', fullname: 'Dr. Veena B. Anthony' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Arora', fullname: 'Mrs. Shiwani & Dr. Ganesh Arora' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Barot', fullname: 'Mr. & Mrs. Dilip Barot' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Bhalani', fullname: 'Dr. & Mrs. Kanthibhai Bhalani' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Bhosale', fullname: 'Rajshree & Ravi Bhosale' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Bikkasani', fullname: 'Drs. Aruna & Purna Bikkasani' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Bikkasani', fullname: 'Drs. & Mrs. P. Rao Bikkasani' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Das', fullname: 'Dr. & Mrs. Chandranath L. Das' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Dave', fullname: 'Dr. & Mrs. Chandrakant Dave' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Desai', fullname: 'Dr. & Mrs. Pareshkumar Desai' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Eligeti', fullname: 'Mrs. Jamuna & Dr. Ramulu Eligeti' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Feldman', fullname: 'Dr. & Mrs. Robert Feldman' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Gandhi', fullname: 'Dr. Sunil & Mrs. Gandhi' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Ganesh', fullname: 'Drs. Lalitha & Thangavelu Ganesh' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Garg', fullname: 'Dr. & Mrs. Lal Garg' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Goswami', fullname: 'Mrs. Karuna & Dr. Yogi Goswami' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Hazariwala', fullname: 'Mrs. Indira & Dr. Kaushik Hazariwala' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Iyer', fullname: 'Dr. & Mrs. Hari Iyer' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Jain', fullname: 'Dr. & Mrs. Vidyasagar Jain' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Jain', fullname: 'Mr. & Mrs. Ashok K. Jain' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Kabeer', fullname: 'Drs. Rizwana & Adil Kabeer' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Karve', fullname: 'Mrs. Sudha & Dr. Nandkumar Karve' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Keskar', fullname: 'Mrs. Sandhya & Dr. Prabhakar Keskar' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Khargonekar', fullname: 'Mrs. Seema & Dr. Pramod Khargonekar' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Dr. & Mrs. Jitendra Mehta' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Mr. & Mrs. Dilip Mehta' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Dr. & Mrs. Jawahar Mehta' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Mr. Kishore Mehta/Swaminarayan Sanstha' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Dr. & Mrs. Harshad Mehta' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Mitra', fullname: 'Dr. & Mrs. Purushottam Mitra' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Moralia', fullname: 'Mr. & Mrs. Maheshbhai Moralia' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Moudgil', fullname: 'Dr. Brij & Mrs. Sheela Moudgil' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Musunuru', fullname: 'Mr. & Mrs. S. K. Rao Musunuru' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Nagda', fullname: 'Mrs. Harsha & Dr. Rasik Nagda' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Narayan', fullname: 'Dr. & Mrs. Perincheri Narayan' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Narayanan', fullname: 'Drs. Vasudha & Ranga Narayanan' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Nataraj', fullname: 'Uma Iyer, MD & Chandra Nataraj' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Nathan', fullname: 'Meena & Rama Nathan, MD' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Padman', fullname: 'Dr. & Mrs. Muni Padman' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Pagidipati', fullname: 'Mrs. Rudrama & Dr. Devaiah Pagidipati' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Paryani', fullname: 'Mr. & Mrs. Nandu Paryani' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Mahendrabhai Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Dr. & Mrs. Kiran Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. K. P. Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Ashokbhai Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Hasmukhbhai Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Ramesh F. Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Ashokbhai S. Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Dr. & Mrs. Kanthibhai Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Dr. & Mrs. Dinesh Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. J.S. Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Ramesh C. Patel' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Pericherla', fullname: 'Dr. & Mrs. Varma Pericherla' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Potu', fullname: 'Dr. & Mrs. Ranganatha Potu' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Qaiyumi', fullname: 'Mr. Iqbal & Shaheda Qaiyumi, MD' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Raju', fullname: 'Mrs. Kumari & Dr. Dantuluri Raju' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Ram', fullname: 'Dr. & Mrs. Anil Ram' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Rao', fullname: 'Mrs. Rose Marea & Dr. Krishna Rao' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Rao', fullname: 'Dr. & Mrs. Upendra Rao' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Rumalla', fullname: 'Mrs. Vilasini & Dr. Prabhakar Rumalla' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Sahni', fullname: 'Mrs. Neeta & Dr. Sartaj Sahni' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Sakaria', fullname: 'Mr. & Mrs. Sanmukh Sakaria' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Sankar', fullname: 'Mira & Dr. Bhavani Sankar' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Saxena', fullname: 'Dr. & Mrs. Dhirendra Saxena' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. & Mrs. Bhupendra Shah' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Shah', fullname: 'Dr. Dinesh O. Shah' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Shukla', fullname: 'Dr. & Mrs. Manoj Shukla' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Siddiqui', fullname: 'Shameem & Jaleel Siddiqui, MD' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Singer', fullname: 'Mr. Mickey Singer' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Singh', fullname: 'Drs. Deepika & Rajiv Singh' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Singh', fullname: 'Dr. & Mrs. Manoranjan Singh' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Singh', fullname: 'Kaushalendra K Singh, MD' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Sitharam', fullname: 'Drs. Meera Sitharam & Jorg Peters' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Someshwar', fullname: 'Mrs. Neeta & Dr. Arun Someshwar' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Srivastava', fullname: 'Mrs. Premlata & Dr. Ramakant Srivastava' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Thakkar', fullname: 'Dr. & Mrs. Vinod Thakkar' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Thomas', fullname: 'Drs. Saji Packal & Anil Thomas' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Upadhyaya', fullname: 'Dr. & Mrs. Dipak Upadhyaya' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Urban', fullname: 'Dr. & Mrs. Paul L. Urban' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Vasil', fullname: 'Drs. Vimla & Indra Vasil' },
    { membershipType: 'Donor Member', membershipTerm: '', lastname: 'Vasudevan', fullname: 'Mrs. Anju & Dr. Ram Vasudevan' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Agravat', fullname: 'Dr. & Mrs. B. M. Agravat' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Ajinkya', fullname: 'Dr. & Mrs. Bipin Ajinkya' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Alladi', fullname: 'Mrs. Mathura & Dr. Krishna Alladi' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Amin', fullname: 'Mr. & Mrs. Paresh R. Amin' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Amin', fullname: 'Kamalesh Amin, MD' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Ansari', fullname: 'Mohammad Ansari, MD' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Balakrishnan', fullname: 'Dr. & Mrs. Velukutty Balakrishnan' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Bandyopadhyay', fullname: 'Dr. & Mrs. Bhaskar Bandyopadhyay' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Barot', fullname: 'Mr. & Mrs. Raghubhai Barot' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Bellam', fullname: 'Rajendra Prasad Bellam, MD' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Benedetto', fullname: 'Dr. D. Benedetto' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Bhardwaj', fullname: 'Mrs. Bhavna & Dr. Gabu Bhardwaj' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Bhatia', fullname: 'Dr. & Mrs. Karan Bhatia' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Brahmbhatt', fullname: 'Mr. & Mrs. Bhupen Brahmbhatt' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Chandra', fullname: 'Dr. & Mrs Ravi Chandra' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Charudattan', fullname: 'Dharini & Dr. Raghavan Charudattan' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Daphtary', fullname: 'Dr. Uday Daphtary' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Desai', fullname: 'Mr. & Mrs. Harshad Desai' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Deshpande', fullname: 'Mr. & Mrs. Anil Deshpande' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Dev', fullname: 'Mr. & Mrs. Mahendra Dev' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Doshi', fullname: 'Mr. & Mrs. Pareshbhai Doshi' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Gaekwad', fullname: 'Mrs. Manisha & Mr. Digvijay Gaekwad' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Ganti', fullname: 'Dr. & Mrs. Krishna Ganti' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Garg', fullname: 'Dr. & Mrs. Arun K. Garg' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Ghosh', fullname: 'Dr. Malay & Dola Ghosh' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Goswami', fullname: 'Mr. Tushar & Dr. Sheel Goswami' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Gupta', fullname: 'Drs. Virendra & Santosh Gupta' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Gupta', fullname: 'Mr. & Mrs. Avinash Gupta' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Jaysval', fullname: 'Mr. & Mrs. Gunvantbhai Jaysval' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Jeewa', fullname: 'Mr. & Mrs. M. S. Jeewa' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Jesrani', fullname: 'Mrs. Kavita & Dr. Mohan Jesrani' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Jobalia', fullname: 'Mr. & Mrs. Dipak Jobalia' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Kanuri', fullname: 'Dr. & Mrs. Ramakrishna Kanuri' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Kardani', fullname: 'Mr. & Mrs. V. Kardani' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Kher', fullname: 'Dr. & Mrs. Harish Kher' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Kohli', fullname: 'Mrs. Neelam & Dr. Nagesh Kohli' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Kotoor', fullname: 'Mr. & Mrs. Kumar Kotoor' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Kumar', fullname: 'Dr. & Mrs. Pradeep Kumar' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Kuruvilla', fullname: 'Dr. & Mrs. Anand Kuruvilla' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Lakdawala', fullname: 'Mr. & Mrs. Sharad Lakdawala' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Lele', fullname: 'Dr. Uma Lele' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Mahajan', fullname: 'Dr. & Mrs. Sunil Mahajan' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Maico', fullname: 'Dr. & Mrs. Daniel Maico' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Mr. & Mrs. Vinodchandra Mehta' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Dr. Bijal A. Mehta' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Mrs. Shardabhen Mehta' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Mr. & Mrs. Kan Mehta' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Mehta', fullname: 'Dr. & Mrs. Ashish Mehta' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Mittal', fullname: 'Mrs. Sheena & Dr. Vijay Mittal' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Modi', fullname: 'Dr. & Mrs. Kiran Modi' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Mohanani', fullname: 'Mr. & Mrs. Ashok Mohanani' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Murthy', fullname: 'Mrs. Prema & Dr. Srinivasa Murthy' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Nadkarni', fullname: 'Dr. & Mrs. Shyam Nadkarni' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Nagarajan', fullname: 'Dr. & Mrs. V. P. Nagarajan' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Nair', fullname: 'Dr. & Mrs. P. K. R. Nair' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Nathan', fullname: 'Dr. & Mrs. Ravindra Nathan' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Nimmagadda', fullname: 'Dr. & Mrs. Sarojini Nimmagadda' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Oza', fullname: 'Drs. Meera & Rajshekhar Oza' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Padalia', fullname: 'Mr. & Mrs. Bharat Padalia' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Padalia', fullname: 'Dr. & Mrs. Manubhai Padalia' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Padalia', fullname: 'Dr. & Mrs. Jitendra Padalia' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Pally', fullname: 'Dr. & Mrs. Madhav Pally' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Palta', fullname: 'Dr. & Mrs. Jeetendra Palta' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Parekh', fullname: 'Mr. & Mrs. Jasvantray Parekh' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Parikh', fullname: 'Dr. & Mrs. Madhubhai Parikh' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Parikh', fullname: 'Dr. & Mrs. Bharat Parikh' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Parkhani', fullname: 'Dr. & Mrs. C. K. Parkhani' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Pasem', fullname: 'Mrs. Vijaya & Dr. Sunder Reddy Pasem' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Vasant Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Sunilbhai Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mrs. Kokilaben Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Rajiv Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Bipin Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Kapila Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Kishorebhai Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Chandrakant Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Niranjan Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Hasmukh Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Prafull Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Chandravadan Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Dr. & Mrs. Vinod M. Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Suryakantbhai Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Kiran Kumar Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Devendra C. Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Dr. & Mrs. Girish Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Dinesh Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Chandrakant Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Dilip Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Jayant M. Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Kamlesh Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Natubhai Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Dilip Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mrs. Jyotsna & Mr. Arvind Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Mahesh Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Dr. & Mrs. Vipin Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Shantilal Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Ragendra Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Minesh Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Suresh Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. Manubhai Patel & Family' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Sumantbhai Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Bipin Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Jayanarayan S. Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Arun Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Ashokbhai Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Dr. & Mrs. Shirish Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Mr. & Mrs. Siddharth Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Patel', fullname: 'Dr. & Mrs. Chandrakant Patel' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Pathak', fullname: 'Dr. Praveen & Sharvari Pathak' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Pattisapu', fullname: 'Mr. & Mrs. Jogi Pattisapu' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Prabhu', fullname: 'Dr. & Mrs. Sudhir L. Prabhu' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Punja', fullname: 'Mrs. Shanthi & Dr. Madhukar Punja' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Rai', fullname: 'Dr. & Mrs. Swaroop Rai' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Rajasekhar', fullname: 'Dr. Parvathi Rajasekhar' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Raju', fullname: 'Dr. & Mrs. B. R. Raju' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Ramappa', fullname: 'Dr. & Mrs. Gogi Ramappa' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Ramaswamy', fullname: 'Dr. & Mrs. V. Ramaswamy' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Rangarajan', fullname: 'Manisha Ranade & Dr. Anand Rangarajan' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Ranka', fullname: 'Mrs. Deepa & Dr. Sanjay Ranka' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Rao', fullname: 'Dr. & Mrs. P.V. Rao' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Ravipati', fullname: 'Dr. & Mrs. Murthy Ravipati' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Reddy', fullname: 'Dr. & Mrs. Tiyyagura Reddy' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Reddy', fullname: 'Dr. & Mrs. Venugopal Reddy' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Saha', fullname: 'Dr. Tridiv (Ted) & Mrs. Merlyn Saha' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Sastri', fullname: 'Mr. & Mrs. M.S. Sastri' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. & Mrs. Rajnibhai Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. & Mrs. Rajani Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. & Mrs. Bharat Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. & Mrs. Lalit Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. & Mrs. Ramesh Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. & Mrs. Harish Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Dr. & Mrs. Prerak D. Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. Anjay Prerak Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Dr. & Mrs. Atul Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mr. & Mrs. Indravadan Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shah', fullname: 'Mrs. Neha & Dr. Nikhil Shah' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shanadi', fullname: 'Dr. & Mrs. Ganesh Shanadi' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shanker', fullname: 'Drs. Savita & Ajay Shanker' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Sheth', fullname: 'Mrs. Meena & Dr. Haresh Sheth' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Shukla', fullname: 'Dr. & Mrs. Ravindra Shukla' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Singh', fullname: 'Deepa & Ajay Singh, CPA' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Singh', fullname: 'Mr. & Mrs. Satnam Singh' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Sinha', fullname: 'Mrs. Sita Sinha, c/o Mrs. P. Mitra' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Tiwari', fullname: 'Dr. & Mrs. Ashutsoh Tiwari' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Tripathi', fullname: 'Dr. & Mrs. Shreekant Tripathi' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Vaghaiwalla', fullname: 'Dr. & Mrs. Minoo Vaghaiwalla' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Vakharia', fullname: 'Mrs. Jayshree & Dr. Asoo Vakharia' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Velisetty', fullname: 'Mrs. Asha & Dr. Ravi Velisetty' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Vijapura', fullname: 'Dr. & Mrs. A. K. Vijapura' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Vyapaka', fullname: 'Mrs. Vidya & Dr. Jagannadha Vyapaka' },
    { membershipType: 'Founding Member', membershipTerm: '', lastname: 'Vyas', fullname: 'Mr. & Mrs. Suryakant Vyas' }
];

export class Members {
    year: number;
    title: string;
    memberList: Member[];
}

export class Member {
    membershipType: string;
    membershipTerm?: string;
    fullname: string;
    lastname: string;
    email?: string;
    contact?: string;
    title?: string;
}

export class MemberList {
    year: number;
    executives: Member[];
    boardMembers: Member[];
    regularMembers: Member[];
}