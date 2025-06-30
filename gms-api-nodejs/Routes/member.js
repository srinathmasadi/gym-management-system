const express = require("express")
const router = express.Router();
const MemberController = require('../Controllers/members');
const auth = require('../Auth/auth')

router.get('/all-member',auth,MemberController.getAllMember);
router.post('/register-member',auth,MemberController.registerMember);

router.get('/searched-members',auth,MemberController.searchMember)
router.get('/monthly-members',auth,MemberController.monthlyMember)
router.get('/expiry3days',auth,MemberController.expiringWithin3Days)
router.get('/expiry4to7days',auth,MemberController.expiringWithIn4To7Days)
router.get('/expired-members', auth, MemberController.expiredMember)
router.get('/inactive-members', auth, MemberController.inActiveMember)

router.get('/get-member/:id', auth, MemberController.getMemberDetails)
router.post('/change-status/:id',auth,MemberController.changeStatus)
router.put('/update-member-plan/:id',auth,MemberController.updateMemberPlan)
module.exports = router;