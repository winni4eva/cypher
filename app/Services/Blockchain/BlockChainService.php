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

    public function updateWalletAddress(string $addressId, string $passphrase)
    {
        $response = $this->client->updateWalletAddress($addressId, $passphrase);
        
        if(collect($response)->has('error')) {
            return $this->handleErrorResponse($response);
        }

        return $response;
    }

    public function listWallets()
    {
        $response = $this->client->listWallets();
        
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

    public function sendTransaction(string $recepientAddress, $amount, $passphrase = '') 
    {

        $response = $this->client->sendTransaction($recepientAddress, $amount, $passphrase);

        if(collect($response)->has('error')) {
            return $response;
        }
        
        return $response;
    }

    public function getWalletTransactions()
    {
        $response = $this->client->getWalletTransactions();

        if(!$response) {
            return $response;
        }

        return $response;
    }

}