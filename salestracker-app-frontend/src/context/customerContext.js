import React, { createContext, useState, useEffect } from 'react';

const CustomerContext = createContext();

function CustomerProvider( { children })