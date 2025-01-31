export const OverloadMessageId = 'overload';

enum MessageId {
    // App
    AppName = 'app.name',
    Placeholder = 'app.placeholder',
    AppGreeting = 'app.greeting',
    AppAbout = 'app.about',

    // Auth
    AuthLogout = 'auth.logout',

    // Menu
    MenuPrompt = 'menu.prompt',
    MenuOption_ManageUsers = 'menu.option.manage_users',
    MenuOption_JoinKeyCeremony = 'menu.option.join_key_ceremony',
    MenuOption_SetupElection = 'menu.option.setup_election',
    MenuOption_BeginTallyCeremony = 'menu.option.begin_tally_ceremony',
    MenuOption_UploadManifest = 'menu.option.upload_manifest',
    MenuOption_BuildManifest = 'menu.option.build_manifest',
    MenuOption_ManageJointKeys = 'menu.option.manage_joint_keys',
    MenuOption_ManageElections = 'menu.option.manage_elections',
    MenuOption_SetupJointKey = 'menu.option.setup_joint_keys',

    // Login Form
    LoginFormUsername = 'login_form.username',
    LoginFormPassword = 'login_form.password',
    LoginFormSubmit = 'login_form.submit',

    // Election Setup
    ElectionSetupManifestMenuTitle = 'election_setup.manifest_menu.title',
    ElectionSetupManifestMenuAbout = 'election_setup.manifest_menu.about',
    ElectionSetupManifestMenuPrompt = 'election_setup.manifest_menu.prompt',

    ElectionSetupJointKeyRetrievedTitle = 'election_setup.joint_key_retrieved.title',
    ElectionSetupJointKeyRetrievedCTA = 'election_setup.joint_key_retrieved.cta',
    ElectionSetupJointKeyRetrievedDescription = 'election_setup.joint_key_retrieved.description',
    ElectionSetupJointKeyRetreivedNext = 'election_setup.joint_key_retrieved.next',

    ElectionSetupJointKeySelectTitle = 'election_setup.joint_key_select.title',
    ElectionSetupJointKeySelectDescription = 'election_setup.joint_key_select.description',
    ElectionSetupJointKeySelectPrompt = 'election_setup.joint_key_select.prompt',
    ElectionSetupJointKeySelectNext = 'election_setup.joint_key_select.next',

    ElectionSetupManifestPreviewTitle = 'election_setup.manifest_preview.title',
    ElectionSetupManifestPreviewPropertyName = 'election_setup.manifest_preview.property.name',
    ElectionSetupManifestPreviewPropertyNumberOfContests = 'election_setup.manifest_preview.property.number_of_contests',
    ElectionSetupManifestPreviewPropertyNumberOfStyles = 'election_setup.manifest_preview.property.numberOfStyles',
    ElectionSetupManifestPreviewPropertyStartDate = 'election_setup.manifest_preview.property.start_date',
    ElectionSetupManifestPreviewPropertyEndDate = 'election_setup.manifest_preview.property.end_date',
    ElectionSetupManifestPreviewPropertyFileHash = 'election_setup.manifest_preview.property.file_hash',
    ElectionSetupManifestPreviewPropertyFileName = 'election_setup.manifest_preview.property.file_name',
    ElectionSetupManifestPreviewCaption = 'election_setup.manifest_preview.caption',
    ElectionSetupManifestPreviewNext = 'election_setup.manifest_preview.next',
    ElectionSetupManifestPreviewBackToMenu = 'election_setup.manifest_preview.back_to_menu',

    ElectionSetupSetupCompleteTitle = 'election_setup.setup_complete.title',
    ElectionSetupSetupCompleteNext = 'election_setup.setup_complete.next',

    ElectionSetupIntroductionTitle = 'election_setup.introduction.title',
    ElectionSetupIntroductionDescription = 'election_setup.introduction.description',
    ElectionSetupIntroductionNext = 'election_setup.introduction.next',
    ElectionSetupIntroductionStepsHeading = 'election_setup.introduction.steps_heading',
    ElectionSetupIntroductionStepsInstructions = 'election_setup.introduction.steps_instruction',
    ElectionSetupIntroductionStep1 = 'election_setup.introduction.step1',
    ElectionSetupIntroductionStep2 = 'election_setup.introduction.step2',
    ElectionSetupIntroductionStep3 = 'election_setup.introduction.step3',
    ElectionSetupIntroductionStep4 = 'election_setup.introduction.step4',

    ElectionSetupUploadManifestTitle = 'election_setup.upload_manifest.title',
    ElectionSetupUploadManifestUpload = 'election_setup.upload_manifest.upload',
    ElectionSetupUploadManifestError = 'election_setup.upload_manifest.error',

    // Election List
    ElectionListTitle = 'election_list.title',
    ElectionListDescription = 'election_list.description',
    ElectionListGoHome = 'election_list.go_home',

    // Joint Key Setup
    JointKeySetup_KeySetup_Title = 'joint_key_setup.key_setup.title',
    JointKeySetup_KeySetup_Description = 'joint_key_setup.key_setup.description',
    JointKeySetup_KeySetup_KeyHeading = 'joint_key_setup.key_setup.key_heading',
    JointKeySetup_KeySetup_NumberOfGuardiansHeading = 'joint_key_setup.key_setup.number_of_guardians_heading',
    JointKeySetup_KeySetup_NumberOfGuardiansEmphasis = 'joint_key_setup.key_setup.number_of_guardians_emphasis',
    JointKeySetup_KeySetup_NumberOfGuardiansDescription = 'joint_key_setup.key_setup.number_of_guardians_description',
    JointKeySetup_KeySetup_QuorumHeading = 'joint_key_setup.key_setup.quorum_heading',
    JointKeySetup_KeySetup_QuorumEmphasis = 'joint_key_setup.key_setup.quorum_emphasis',
    JointKeySetup_KeySetup_QuorumDescription = 'joint_key_setup.key_setup.quorum_description',
    JointKeySetup_KeySetupReview_Title = 'joint_key_setup.key_setup_review.title',
    JointKeySetup_GuardianAssignment_Title = 'joint_key_setup.guardian_assignment.title',
    JointKeySetup_GuardianAssignment_Description = 'joint_key_setup.guardian_assignment.description',
    JointKeySetup_GuardianAssignment_AssignedLabel = 'joint_key_setup.guardian_assignment.assigned_label',
    JointKeySetup_GuardianAssignment_NoGuardians = 'joint_key_setup.guardian_assignment.no_guardians',
    JointKeySetup_GuardianAssignment_Assign = 'joint_key_setup.guardian_assignment.assign',
    JointKeySetup_GuardianAssignmentReview_Title = 'joint_key_setup.guardian_assignment_review.title',
    JointKeySetup_GuardianAssignmentReview_Description = 'joint_key_setup.guardian_assignment_review.description',
    JointKeySetup_GuardianAssignmentReview_ConfirmationCallout = 'joint_key_setup.guardian_assignment_review.confirmation_callout',
    JointKeySetup_GuardianAssignmentReview_Confirmation = 'joint_key_setup.guardian_assignment_review.confirmation',

    KeyCeremonyList_Title = 'key_ceremony_list.title',
    KeyCeremonyList_Description = 'key_ceremony_list.description',

    JointKeyList_Title = 'joint_key_list.title',
    JointKeyList_Description = 'joint_key_list.description',

    // Key Ceremony
    KeyCeremony_Introduction_Title = 'key_ceremony.introduction.title',
    KeyCeremony_Introduction_Description = 'key_ceremony.introduction.description',
    KeyCeremony_Introduction_StepsHeading = 'key_ceremony.introduction.steps_heading',
    KeyCeremony_Introduction_StepsDescription = 'key_ceremony.introduction.steps_description',
    KeyCeremony_Introduction_Step1 = 'key_ceremony.introduction.step1',
    KeyCeremony_Introduction_Step2 = 'key_ceremony.introduction.step2',
    KeyCeremony_Introduction_Step3 = 'key_ceremony.introduction.step3',
    KeyCeremony_Introduction_Step4 = 'key_ceremony.introduction.step4',
    KeyCeremony_Introduction_Step5 = 'key_ceremony.introduction.step5',
    KeyCeremony_Introduction_Step6 = 'key_ceremony.introduction.step6',
    KeyCeremony_Introduction_Step7 = 'key_ceremony.introduction.step7',

    KeyCeremony_MeetGuardians_Title = 'key_ceremony.meet_guardians.title',
    KeyCeremony_MeetGuardians_Description = 'key_ceremony.meet_guardians.description',
    KeyCeremony_MeetGuardians_GuardianHeading = 'key_ceremony.meet_guardians.guardian_heading',
    KeyCeremony_MeetGuardians_Button = 'key_ceremony.meet_guardians.button',

    KeyCeremony_CreateKeyPair_Title = 'key_ceremony.create_keypair.title',
    KeyCeremony_CreateKeyPair_Description = 'key_ceremony.create_keypair.description',
    KeyCeremony_CreateKeyPair_Button = 'key_ceremony.create_keypair.button',

    KeyCeremony_SharePublicKey_Title = 'key_ceremony.share_public_key.title',
    KeyCeremony_SharePublicKey_Description = 'key_ceremony.share_public_key.description',
    KeyCeremony_SharePublicKey_Button = 'key_ceremony.share_public_key.button',

    KeyCeremony_CreateBackups_Title = 'key_ceremony.create_backups.title',
    KeyCeremony_CreateBackups_Description = 'key_ceremony.create_backups.description',
    KeyCeremony_CreateBackups_Button = 'key_ceremony.create_backups.button',
    KeyCeremony_CreateBackups_DisabledButton = 'key_ceremony.create_backups.disabled_button',

    KeyCeremony_ShareBackups_Title = 'key_ceremony.share_backups.title',
    KeyCeremony_ShareBackups_Description = 'key_ceremony.share_backups.description',
    KeyCeremony_ShareBackups_Button = 'key_ceremony.share_backups.button',

    KeyCeremony_VerifyBackups_Title = 'key_ceremony.verify_backups.title',
    KeyCeremony_VerifyBackups_Description = 'key_ceremony.verify_backups.description',
    KeyCeremony_VerifyBackups_Button = 'key_ceremony.verify_backups.button',

    KeyCeremony_CombineKeys_Title = 'key_ceremony.combine_keys.title',
    KeyCeremony_CombineKeys_Description = 'key_ceremony.combine_keys.description',
    KeyCeremony_CombineKeys_Button = 'key_ceremony.combine_keys.button',
    KeyCeremony_CombineKeys_DisabledButton = 'key_ceremony.combine_keys.disabled_button',

    KeyCeremony_Complete_Title = 'key_ceremony.complete.title',
    KeyCeremony_Complete_Description = 'key_ceremony.complete.description',
    KeyCeremony_Complete_Button = 'key_ceremony.complete.button',

    KeyCeremony_Vizualization_Complete = 'key_ceremony.visualization_complete',

    KeyCeremony_Steps_Instructions = 'key_ceremony.steps.instructions',
    KeyCeremony_Steps_MeetGuardians = 'key_ceremony.steps.meet_guardians',
    KeyCeremony_Steps_CreateKeypair = 'key_ceremony.steps.create_keypair',
    KeyCeremony_Steps_SharePublicKey = 'key_ceremony.steps.share_public_key',
    KeyCeremony_Steps_CreateBackups = 'key_ceremony.steps.create_backups',
    KeyCeremony_Steps_ShareBackups = 'key_ceremony.steps.share_backups',
    KeyCeremony_Steps_VerifyBackups = 'key_ceremony.steps.verify_backups',
    KeyCeremony_Steps_CombineKeys = 'key_ceremony.steps.combine_keys',
    KeyCeremony_Steps_Complete = 'key_ceremony.steps.complete',

    // Tally Ceremony
    // -- Steps
    TallyCeremony_Introduction_Title = 'tally_ceremony.introduction.title',
    TallyCeremony_Introduction_Description = 'tally_ceremony.introduction.description',
    TallyCeremony_Introduction_Button = 'tally_ceremony.introduction.button',
    TallyCeremony_Introduction_StepsHeading = 'tally_ceremony.introduction.steps_heading',
    TallyCeremony_Introduction_StepsDescription = 'tally_ceremony.introduction.steps_description',
    TallyCeremony_Introduction_Step1 = 'tally_ceremony.introduction.step1',
    TallyCeremony_Introduction_Step2 = 'tally_ceremony.introduction.step2',
    TallyCeremony_Introduction_Step3 = 'tally_ceremony.introduction.step3',
    TallyCeremony_Introduction_Step4 = 'tally_ceremony.introduction.step4',

    TallyCeremony_DownloadTally_Title = 'tally_ceremony.download_tally.title',
    TallyCeremony_DownloadTally_Description = 'tally_ceremony.download_tally.description',
    TallyCeremony_DownloadTally_Button = 'tally_ceremony.download_tally.button',

    TallyCeremony_DecryptTallyShare_Title = 'tally_ceremony.decrypt_tally_share.title',
    TallyCeremony_DecryptTallyShare_Description = 'tally_ceremony.decrypt_tally_share.description',
    TallyCeremony_DecryptTallyShare_Button = 'tally_ceremony.decrypt_tally_share.button',
    TallyCeremony_DecryptTallyShare_Decrypting = 'tally_ceremony.decrypt_tally_share.decrypting',
    TallyCeremony_DecryptTallyShare_Complete = 'tally_ceremony.decrypt_tally_share.complete',
    TallyCeremony_DecryptTallyShare_CompleteButton = 'tally_ceremony.decrypt_tally_share.complete_button',

    TallyCeremony_UploadTallyShare_Title = 'tally_ceremony.upload_tally_share.title',
    TallyCeremony_UploadTallyShare_Description = 'tally_ceremony.upload_tally_share.description',
    TallyCeremony_UploadTallyShare_Button = 'tally_ceremony.upload_tally_share.button',

    TallyCeremony_DecryptMissing_Title = 'tally_ceremony.decrypt_missing.title',
    TallyCeremony_DecryptMissing_Description = 'tally_ceremony.decrypt_missing.description',
    TallyCeremony_DecryptMissing_Button = 'tally_ceremony.decrypt_missing.button',
    TallyCeremony_DecryptMissing_Decrypting = 'tally_ceremony.decrypt_missing.decrypting',
    TallyCeremony_DecryptMissing_Complete = 'tally_ceremony.decrypt_missing.complete',
    TallyCeremony_DecryptMissing_CompleteButton = 'tally_ceremony.decrypt_missing.complete_button',

    TallyCeremony_NoMissing_Title = 'tally_ceremony.no_missing.title',
    TallyCeremony_NoMissing_Description = 'tally_ceremony.no_missing.description',
    TallyCeremony_NoMissing_Button = 'tally_ceremony.no_missing.button',

    TallyCeremony_UploadMissing_Title = 'tally_ceremony.upload_missing.title',
    TallyCeremony_UploadMissing_Description = 'tally_ceremony.upload_missing.description',
    TallyCeremony_UploadMissing_Button = 'tally_ceremony.upload_missing.button',

    TallyCeremony_CombineShares_Title = 'tally_ceremony.combine_shares.title',
    TallyCeremony_CombineShares_Description = 'tally_ceremony.combine_shares.description',
    TallyCeremony_CombineShares_Button = 'tally_ceremony.combine_shares.button',
    TallyCeremony_CombineShares_ButtonDisabled = 'tally_ceremony.combine_shares.button_disabled',

    TallyCeremony_Complete_Title = 'tally_ceremony.complete.title',
    TallyCeremony_Complete_Description = 'tally_ceremony.complete.description',
    TallyCeremony_Complete_Button = 'tally_ceremony.complete.button',

    // -- Step Descriptions
    TallyCeremony_Steps_Introduction = 'tally_ceremony.steps.introduction',
    TallyCeremony_Steps_DownloadTally = 'tally_ceremony.steps.download_tally',
    TallyCeremony_Steps_DecryptTallyShare = 'tally_ceremony.steps.decrypt_tally_share',
    TallyCeremony_Steps_UploadTallyShare = 'tally_ceremony.steps.upload_tally_share',
    TallyCeremony_Steps_DecryptMissing = 'tally_ceremony.steps.decrypt_missing',
    TallyCeremony_Steps_UploadMissing = 'tally_ceremony.steps.upload_missing',
    TallyCeremony_Steps_CombineShares = 'tally_ceremony.steps.combine_shares',
    TallyCeremony_Steps_TallyComplete = 'tally_ceremony.steps.tally_complete',

    // Models
    JointKey_Name = 'joint_key.name',
    JointKey_NumberOfGuardians = 'joint_key.number_of_guardians',
    JointKey_Quorum = 'joint_key.quorum',

    Guardian = 'guardian',
    Guardian_Name = 'guardian.name',

    // Placeholder
    Placeholder_Processing = 'placeholder.processing',
    Placeholder_Complete = 'placeholder.complete',
    Placeholder_Error = 'placeholder.error',

    // Actions
    Actions_Cancel = 'actions.cancel',
    Actions_Submit = 'actions.submit',
    Actions_Confirm = 'actions.confirm',
    Actions_Next = 'actions.next',
    Actions_Back = 'actions.back',
    Actions_Continue = 'actions.continue',
    Actions_Previous = 'actions.previous',
    Actions_Edit = 'actions.edit',

    Nav_Return_Home = 'nav.return_home',

    TaskStatus_Error = 'task_status.error',
    TaskStatus_Complete = 'task_status.complete',
    TaskStatus_Incomplete = 'task_status.incomplete',
}

export type OverloadableMessageId = MessageId | typeof OverloadMessageId;

export default MessageId;
