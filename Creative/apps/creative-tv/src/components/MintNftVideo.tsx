import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, BreadcrumbItem, BreadcrumbLink, Breadcrumb } from '@chakra-ui/react';
import { LivepeerConfig } from '@livepeer/react';
import WagmiNft from './WagmiNft';
import { useLivepeerClient } from 'hooks/useLivepeerClient';
import { AssetData } from './CreateAndViewAsset';

interface HeaderProps {
  children: ReactNode;
}

const MintNftVideo = ({ children }: HeaderProps): JSX.Element => {
  const router = useRouter();
  const assetId = router.query.assetId?.toString() ?? '';
  const assetData = Buffer.from(router.query.assetData?.toString() || "", 'base64').toString();
  const parsedAssetData = JSON.parse(assetData || '{}') as AssetData;
  console.log(parsedAssetData);
  return (
    <LivepeerConfig client={useLivepeerClient}>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => router.push('/')}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage className="active-crumb">
            <BreadcrumbLink href="#">Mint NFT Video</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <WagmiNft assetId={assetId} description={parsedAssetData.description} assetName={parsedAssetData.title} assetData={parsedAssetData}/>
      </Box>
    </LivepeerConfig>
  );
};

export default MintNftVideo;
