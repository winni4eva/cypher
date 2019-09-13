<?php

namespace App\Services\Blockchain;

use App\Services\Blockchain\Clients\ClientContract;

class BlockChainService
{
    protected $client;

    public function __construct(ClientContract $client)
    {
        $this->client = $client;
    }

    public function createWallet() 
    {   
        $response = $this->client->createWallet();

        if(!$response) {
            return $response;
        }

        return $response;
    }

    public function getWalletAddresses()
    {
        $response = $this->client->getWalletAddresses();

        if(!$response) {
            return $response;
        }

        return $response;
    }

    public function createWalletAddress() 
    {
        $response = $this->client->createWalletAddress();

        if(!$response) {
            return $response;
        }

        return $response;
    }

    public function updateWalletAddress(string $addressId)
    {
        $response = $this->client->updateWalletAddress($addressId);
        
        if(collect($response)->has('error')) {
            return $this->handleErrorResponse($response);
        }

        return $response;
    }

    public function getTotalBalances()
    {
        $response = $this->client->getTotalBalances();
        
        if(collect($response)->has('error')) {
            return $this->handleErrorResponse($response);
        }
        
        return $response;
    }

    public function sendTransaction(string $recepientAddress, $amount) 
    {
        //To DO convert usd amount to satoshi
        $response = $this->client->sendTransaction($recepientAddress, $amount);

        if(!$response) {
            return $response;
        }
        logger($response);
        return $response;
    }

    public function getWalletTransactions()
    {
        $response = $this->client->getWalletTransactions();

        if(!$response) {
            return $response;
        }
        logger($response);
        return $response;
    }

}