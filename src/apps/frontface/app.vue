<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup
        lang="ts">
        const links = [{
          label: 'Home',
          to: '/',
          icon: 'i-heroicons-home'
        }, {
          label: 'Template',
          to: '/paper/empty',
          icon: 'i-heroicons-document-magnifying-glass',
          badge: 'New'
        }, {
          label: 'Sample',
          to: '/paper/sample',
          icon: 'i-heroicons-document',
        }, {
          label: 'Sample w Data',
          to: '/paper/sampleWithData',
          icon: 'i-heroicons-document',
        }, {
          label: 'New Member',
          to: '/paper/newMembership',
          icon: 'i-heroicons-document',
        }, {
          label: 'Loan (EM)',
          to: '/paper/loanEmergency',
          icon: 'i-heroicons-document',
        }, {
          label: 'Loan (GN)',
          to: '/paper/loanGeneral',
          icon: 'i-heroicons-document',
        }, {
          label: 'changeGuarantor',
          to: '/paper/appRentice/changeGuarantor',
          icon: 'i-heroicons-document',
        }, {
          label: 'debtRestructuringRequest',
          to: '/paper/appRentice/debtRestructuringRequest',
          icon: 'i-heroicons-document',
        }, {
          label: 'depositor',
          to: '/paper/appRentice/depositor',
          icon: 'i-heroicons-document',
        }, {
          label: 'dividendsRepayLoanDebt',
          to: '/paper/appRentice/dividendsRepayLoanDebt',
          icon: 'i-heroicons-document',
        }, {
          label: 'plasphoto',
          to: '/paper/appRentice/plasphoto',
          icon: 'i-heroicons-document',
        }, {
          label: 'plschangeshare',
          to: '/paper/appRentice/plschangeshare',
          icon: 'i-heroicons-document',
        },{
          label: 'rename',
          to: '/paper/appRentice/rename',
          icon: 'i-heroicons-document',
        }, {
          label: 'requestAndLetterForStockLoan',
          to: '/paper/appRentice/requestAndLetterForStockLoan',
          icon: 'i-heroicons-document',
        }, {
          label: 'requestRefundDeposit',
          to: '/paper/appRentice/requestRefundDeposit',
          icon: 'i-heroicons-document',
        }, {
          label: 'resign',
          to: '/paper/appRentice/resign',
          icon: 'i-heroicons-document',
        },{
          label: 'specialLoanRequest',
          to: '/paper/appRentice/specialLoanRequest',
          icon: 'i-heroicons-document',
        }, {
          label: 'welfareMoney',
          to: '/paper/appRentice/welfareMoney',
          icon: 'i-heroicons-document',
        }, {
          label: 'cremation1',
          to: '/paper/appRentice/cremation1',
          icon: 'i-heroicons-document',
        }, {
          label: 'cremation3',
          to: '/paper/appRentice/cremation3',
          icon: 'i-heroicons-document',
        }, {
          label: 'membershipApplicationSet2',
          to: '/paper/appRentice/membershipApplicationSet2',
          icon: 'i-heroicons-document',
        }, {
          label: 'cremation4',
          to: '/paper/appRentice/cremation4',
          icon: 'i-heroicons-document',
        }, {
          label: 'cremation5',
          to: '/paper/appRentice/cremation5',
          icon: 'i-heroicons-document',
        },{
          label: 'prepare3',
          to: '/paper/appRentice/prepare3',
          icon: 'i-heroicons-document',
        },];

        provide('links', links);
</script>